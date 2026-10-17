---
name: ClipPort
order: 3
tagline: 每一个字节，都完整抵达。
summary: 面向摄影、视频与大批量文件场景的拷卡、完整性校验和任务管理工具，提供 Windows 桌面版与 fnOS 原生版。
accent: "#13c2a3"
accentInk: "#00201b"
icon: ../../assets/projects/clipport/icon.png
iconStyle: full
repo: https://github.com/Edge-HH/ClipPort
links:
  - label: 下载预览版
    href: https://github.com/Edge-HH/ClipPort/releases
platforms: [Windows x64, fnOS x86_64]
stack: [C#, .NET 8, WinUI 3, React]
license: GPL-3.0
version: v1.0.0-beta
stats:
  - value: "5"
    unit: 种
    label: 可选校验算法
  - value: "4"
    unit: MiB
    label: 流式缓冲，大文件也不整块载入内存
  - value: "0"
    unit: 个
    label: 账号与云端依赖，数据全部留在本机
steps:
  - title: 先写临时文件，再安全提交。
    desc: 顺序异步复制，完整写入后才提交到正式路径；取消或失败时自动清理半成品。
  - title: 逐文件比对摘要。
    desc: SHA-256、SHA-512、SHA-1、MD5 与 xxHash64 可选，也能在拷贝时以低优先级后台校验。
  - title: 完成了，第一时间告诉你。
    desc: 任务结束后推送到企业微信、钉钉、飞书、Bark 或邮件，并生成校验报告。
highlights:
  - icon: copy
    title: 三种任务模式
    desc: 复制并校验、仅复制、只校验。保留完整目录结构，复制前检查磁盘空间，并拒绝危险的源与目标目录重叠。
    wide: true
  - icon: hash
    title: 可选校验算法
    desc: 默认 SHA-256，也支持 SHA-512、SHA-1、MD5 与 xxHash64。
  - icon: history
    title: 队列与优先任务
    desc: 多任务排队执行，同一时刻只有一个任务读写；优先任务会在安全检查点接管。
  - icon: bolt
    title: 实时吞吐图
    desc: 复制与校验速度分别绘制实时波形、峰谷值与动态刻度。
  - icon: shield
    title: 安全写入
    desc: 跳过目录联接与符号链接，阻止目标路径穿过重解析点。
  - icon: bell
    title: 多渠道通知
    desc: 同时启用多个企业微信、钉钉、飞书、Bark 或 SMTP 渠道；凭据使用 Windows DPAPI 加密保存。
    wide: true
  - icon: download
    title: 自动更新
    desc: 从 GitHub Releases 检查更新，下载后校验 SHA-256 再替换，不动设置与历史。
---

## 校验算法怎么选

| 算法 | 特点 | 建议用途 |
| --- | --- | --- |
| SHA-256 | 速度与安全余量均衡 | 默认选择，重要素材交付与长期归档 |
| SHA-512 | 摘要更长，计算开销通常更高 | 对长期保存要求更高的归档 |
| SHA-1 | 便于兼容旧清单 | 只用于必须兼容 SHA-1 的旧流程 |
| MD5 | 开销低、兼容性高 | 旧系统或非安全场景 |
| xxHash64 | 吞吐量优先，非密码学算法 | 本机大批量快速完整性检查 |

校验摘要用于发现复制错误或文件变化，不等同于数字签名。没有明确的兼容或吞吐要求时，保留默认的 SHA-256 即可。

## fnOS 原生版

fnOS 版是自包含的 Linux x64 原生应用，不使用 Docker，也不要求设备另行安装 .NET 或 Node.js，通过统一网关提供页面，不开放独立网络端口。
