---
name: RemoteCI
order: 1
tagline: 课堂，延伸到每一块屏幕。
summary: 把 ClassIsland 的课表、通知和受控操作，安全地延伸到 Web、手机和 Wear OS。
accent: "#0a84ff"
accentInk: "#ffffff"
icon: ../../assets/projects/remoteci/icon.svg
iconStyle: tile
repo: https://github.com/Edge-HH/RemoteCI
links:
  - label: 下载最新版
    href: https://github.com/Edge-HH/RemoteCI/releases/latest
  - label: 使用文档
    href: https://edge-hh.github.io/RemoteCI-Docs/
platforms: [Web, Android, Wear OS, Windows, Linux, Docker, fnOS]
stack: [C#, ASP.NET Core, Kotlin, Jetpack Compose, SQLite]
license: GPL-3.0
version: 3.3.1.5
stats:
  - value: "4"
    unit: 端
    label: ClassIsland 插件、WebUI、手机与手表联动
  - value: "7"
    unit: 日
    label: 未来课表独立同步
  - value: "2"
    unit: 重
    label: 服务端与插件端分别鉴权
steps:
  - title: 七日课表，一目了然。
    desc: 插件按秒推送当前课程状态，并独立同步未来七日课表，在 WebUI 上随时查看与拉取。
  - title: 抬腕，就知道这节课还剩多久。
    desc: Wear OS 手表优先局域网直连，也可经云端中转，课程状态与 ClassIsland 实时联动。
  - title: 一次发送，多端送达。
    desc: 从 WebUI、手机或手表发送 ClassIsland 正式通知；命令在服务端与插件端各鉴权一次。
highlights:
  - icon: sync
    title: 课程状态同步
    desc: 插件按秒推送当前课程状态，并独立同步未来七日课表；手动拉取、自动拉取与换课共用任务锁，避免重复执行。
    wide: true
  - icon: watch
    title: Web、手机与手表
    desc: 在 WebUI、Android 手机和 Wear OS 上查看课表、课堂事件与连接状态。
  - icon: bell
    title: 通知与课堂控制
    desc: 发送 ClassIsland 正式通知，并按权限控制在线设备。
  - icon: shield
    title: 细粒度权限
    desc: 按账号分别控制概览、人员管理、通知、换课、扩展、主界面和电源等能力。客户端隐藏按钮不算安全控制，服务端和插件执行端都会重新检查权限。
    wide: true
  - icon: cloud
    title: 局域网与云端
    desc: 手表可优先局域网直连，局域网认证使用一次性 HMAC 挑战，不传输账号密码或云端令牌。
  - icon: puzzle
    title: 插件扩展
    desc: 其他 ClassIsland 插件可以注册带参数表单的远程操作和设置页，管理员可按插件分组批量执行。
  - icon: server
    title: 多平台部署
    desc: 服务端支持 Windows、Linux、Docker 与 fnOS；WebUI 和手表提供正式版与 Beta 渠道。
gallery:
  - src: ../../assets/projects/remoteci/schedule-sync.png
    alt: RemoteCI 的 WebUI 课表页与 Wear OS 手表同时显示未来七日课表
    caption: WebUI 与 Wear OS 同步显示未来七日课表。
---

## 系统组成

RemoteCI 由 ClassIsland 插件、ASP.NET Core 服务端、WebUI、Android 手机和 Wear OS 应用组成。服务端是账号、设备会话与权限的唯一来源；插件只保存不含密码的授权镜像，并负责真正访问 ClassIsland。授权镜像离线超过 24 小时后，插件只允许课程展示并拒绝管理命令。

```text
ClassIsland + RemoteCI 插件
           ⇅ WebSocket / 局域网
ASP.NET Core 服务端 ─── WebUI
           ⇅ 云端或局域网
     Android 手机 / Wear OS 应用
```

## 快速开始

1. 前往 [GitHub Releases](https://github.com/Edge-HH/RemoteCI/releases) 下载对应平台的服务端、插件包与 APK。
2. 启动服务端，首次打开 WebUI 时按向导创建系统管理员和第一个班级。
3. 在 WebUI 生成一次性配对码，填入 ClassIsland 的 RemoteCI 设置，再在手表端登录。

完整的部署、反向代理与备份说明见 [使用文档](https://edge-hh.github.io/RemoteCI-Docs/)。
