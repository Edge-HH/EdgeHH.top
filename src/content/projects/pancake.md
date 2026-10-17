---
name: Pancake
order: 2
tagline: 今天的作业，一眼看清。
summary: 面向教室大屏与触控设备的 Windows 班级作业看板，把时间、日期、天气、教室噪音和各科作业，集中在一块适合远距离阅读的屏幕上。
accent: "#ff9f0a"
accentInk: "#1d1300"
repo: https://github.com/Edge-HH/Pancake
links:
  - label: 下载最新版
    href: https://github.com/Edge-HH/Pancake/releases/latest
platforms: [Windows 10 / 11, 触控大屏]
stack: [C#, .NET 8, WinUI 3]
license: GPL-3.0
version: v2.1.2
stats:
  - value: "4"
    unit: 种
    label: 布局模式：分屏、仅作业、仅时钟、自由布局
  - value: "2566"
    unit: 个
    label: 可按名称搜索的天气地区
  - value: "48"
    unit: px
    label: 默认网格吸附，也可自定义
steps:
  - title: 站在教室后排，也读得清。
    desc: 时钟、日期、天气与教室噪音集中在一块深色看板上，默认全屏展示。
  - title: 各科作业，各就各位。
    desc: 新增、移动、缩放科目磁贴；支持富文本、图片和独立主题色。
  - title: 拿起笔，直接圈重点。
    desc: 全局画笔提供颜色、粗细与橡皮擦，笔迹随项目一起保存。
highlights:
  - icon: layout
    title: 四种布局模式
    desc: 分屏、仅作业、仅时钟和自由布局。分屏时拖动分隔条调整两区大小，拖到两端即进入单区。
    wide: true
  - icon: pen
    title: 手写标注
    desc: 全局画笔支持颜色、三档粗细和橡皮擦，缩放磁贴不会缩放已有笔迹。
  - icon: mic
    title: 噪音检测
    desc: 通过麦克风实时估算环境音量，可调检测间隔、吵闹阈值与提示音。
  - icon: image
    title: 图片导出
    desc: 常用比例或自定义尺寸，导出不含时钟与编辑工具的 PNG。
  - icon: lock
    title: 锁定保护
    desc: 密码只保存哈希，也可绑定验证器使用 TOTP 两步验证。
  - icon: layers
    title: .pch 作业文件
    desc: 把布局、配色、富文本、图片和可编辑笔迹打包成一个文件，导入后可以继续修改并保存回原文件。
    wide: true
  - icon: download
    title: 自动更新
    desc: 从 GitHub 或 Gitee 检查更新，覆盖失败会尝试恢复旧文件。
---

## 使用方式

程序默认以全屏展示模式启动。查看模式下，浮动工具栏依次是编辑看板、设置和全屏切换；进入编辑后，可以拖动磁贴、调整大小、修改作业文字、添加图片，或者用画笔直接书写。

所有项目都会持续自动保存到程序旁的 `data` 目录。按 `Esc` 先结束当前编辑，未在编辑时再按一次则退出全屏。

## 系统要求

- Windows 10 1809（17763）或更高版本，x64 设备
- 正式便携包已自带 .NET 与 Windows App SDK 运行资源，完整解压后运行 `Pancake.exe` 即可
