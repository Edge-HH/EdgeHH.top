import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/** 滚轮惯性平滑滚动；触屏保持系统原生滚动 */
function initSmoothScroll(): Lenis | undefined {
  if (reduceMotion.matches) return undefined;
  return new Lenis({
    autoRaf: true,
    lerp: 0.085,
    anchors: { offset: -64 },
    allowNestedScroll: true,
    stopInertiaOnNavigate: true
  });
}

/** 进入视口时添加 .is-in，触发 CSS 中的 [data-reveal] 过渡 */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

interface ScrubTarget {
  el: HTMLElement;
  mode: string;
  steps: number;
  lastP: number;
  lastStep: number;
}

/**
 * 把滚动进度写入 CSS 变量 --p（0 → 1），样式里用 calc() 驱动动画。
 *
 * data-scrub="sticky"  元素顶部到达视口顶部时为 0，元素底部到达视口底部时为 1（配合内部 position: sticky）
 * data-scrub="enter"   元素顶部从视口底部进入时为 0，到达视口上方 20% 处为 1
 * data-scrub           元素从视口底部进入到完全离开顶部，0 → 1
 * data-steps="n"       额外写入 data-step="0..n-1"，用于分段切换内容
 */
function initScrub() {
  const targets: ScrubTarget[] = Array.from(document.querySelectorAll<HTMLElement>('[data-scrub]'), (el) => ({
    el,
    mode: el.dataset.scrub || 'through',
    steps: Number(el.dataset.steps) || 0,
    lastP: -1,
    lastStep: -1
  }));
  if (!targets.length) return;

  let queued = false;
  const update = () => {
    queued = false;
    const vh = window.innerHeight;
    for (const t of targets) {
      const rect = t.el.getBoundingClientRect();
      let p: number;
      if (t.mode === 'sticky') p = -rect.top / Math.max(1, rect.height - vh);
      else if (t.mode === 'enter') p = (vh - rect.top) / (vh * 0.8);
      else p = (vh - rect.top) / (vh + rect.height);
      p = Math.min(1, Math.max(0, p));

      if (Math.abs(p - t.lastP) > 0.0004) {
        t.el.style.setProperty('--p', p.toFixed(4));
        t.lastP = p;
      }
      if (t.steps) {
        const step = Math.min(t.steps - 1, Math.floor(p * t.steps));
        if (step !== t.lastStep) {
          t.el.dataset.step = String(step);
          t.lastStep = step;
        }
      }
    }
  };
  const request = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
}

/** 样机按设计宽度整体缩放：--k = 容器宽度 / 设计宽度 */
function initFit() {
  const els = document.querySelectorAll<HTMLElement>('[data-fit]');
  if (!els.length) return;
  const fit = (el: HTMLElement) => el.style.setProperty('--k', String(el.clientWidth / Number(el.dataset.fit)));
  const ro = new ResizeObserver((entries) => entries.forEach((e) => fit(e.target as HTMLElement)));
  els.forEach((el) => {
    fit(el);
    ro.observe(el);
  });
}

/** 导航栏离开页面顶部后显示分隔线 */
function initNavState() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 4);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

initFit();
initScrub();
initReveal();
initNavState();
initSmoothScroll();
