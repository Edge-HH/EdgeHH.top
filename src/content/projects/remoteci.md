---
name: RemoteCI
order: 1
summary: ClassIsland 的远程联动与集控系统。在网页、手机和手表上看课表、换课、给教室大屏发通知，也能按年级批量管理全校的 ClassIsland。
intro: RemoteCI 由 ClassIsland 插件、服务端、WebUI、Android 手机 App 和 Wear OS 手表 App 组成。插件把教室电脑上的课表和课堂状态同步到服务端，老师和管理员在 WebUI、手机或手表上查看课表、发起换课、发送通知和语音；管理员还可以按班级分组批量下发命令、管理插件、分发档案和文件。所有操作都由服务端和插件各检查一次权限。
accent: "#0a84ff"
icon: ../../assets/projects/remoteci/icon.svg
iconStyle: tile
version: "3.3.1.5"
released: 2026-10-15
download: https://github.com/Edge-HH/RemoteCI/releases/latest
docs: https://edge-hh.github.io/RemoteCI-Docs/
repo: https://github.com/Edge-HH/RemoteCI
platforms: [ClassIsland 2.x 插件, Windows, Linux, Docker, 飞牛 fnOS, Android, Wear OS]
stack: [C#, ASP.NET Core, SQLite, Kotlin, Jetpack Compose]
license: GPL-3.0
screenshots:
  - src: ../../assets/projects/remoteci/shots/overview-light.webp
    dark: ../../assets/projects/remoteci/shots/overview-dark.webp
    alt: RemoteCI WebUI 概览页，显示当前课程“生物”、插件在线、课表同步时间和常用任务
    caption: 概览：当前课程、插件连接、在线手表和课表同步情况
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/schedule-light.webp
    dark: ../../assets/projects/remoteci/shots/schedule-dark.webp
    alt: RemoteCI WebUI 七日课表，周一到周日共八节课，今天所在的周六列以浅绿色标出
    caption: 七日课表：按周一到周日排列，今天所在列高亮，每节显示科目、任课老师和时间
    build: WebUI 3.3.1.5
    cover: true
  - src: ../../assets/projects/remoteci/shots/batch-step2-light.webp
    dark: ../../assets/projects/remoteci/shots/batch-step2-dark.webp
    alt: 批量控制的通知广播第二步，可以按年级分组或逐个班级选择目标
    caption: 批量控制：填好通知内容后，按年级分组或逐个班级选择目标
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/batch-result-light.webp
    dark: ../../assets/projects/remoteci/shots/batch-result-dark.webp
    alt: 批量控制执行结果，高二年级三个班的设备全部回执成功
    caption: 每台设备单独回执：发给高二年级的通知，3 个班全部成功
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/classes-light.webp
    dark: ../../assets/projects/remoteci/shots/classes-dark.webp
    alt: 班级管理页，左侧为年级分组树，右侧为班级列表和批量操作
    caption: 班级管理：左侧多层分组树，右侧勾选班级后批量调整访客和分组
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/swaprequests-light.webp
    alt: 老师换课申请页，可以互换两节课或替换为自己的课
    caption: 老师换课申请：互换两节课或替换为自己的课，由对方老师审批
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/myschedule-light.webp
    alt: 老师王明登录后的“我的日程”，按日期列出他在三个班的数学课
    caption: 老师的“我的日程”：按课表里的教师名自动找到任教班级
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/visitor-light.webp
    alt: 访客页，不登录即可按分组选择班级并查看课表
    caption: 访客页：不登录也能只读查看开放的班级课表
    build: WebUI 3.3.1.5
  - src: ../../assets/projects/remoteci/shots/m-myschedule-light.webp
    alt: 手机浏览器打开的 WebUI“我的日程”
    caption: 手机浏览器中的 WebUI
    build: WebUI 3.3.1.5
    kind: phone
  - src: ../../assets/projects/remoteci/shots/phone-teacher-today.webp
    alt: Android App 首页，显示正在上的数学课、下一节物理和连接状态
    caption: Android App：今日课程状态
    build: 2026-10 初的测试构建
    kind: phone
  - src: ../../assets/projects/remoteci/shots/phone-admin-control.webp
    alt: Android App 课堂控制列表，包括发送通知、语音、清除提醒、主界面、音量、电源和扩展功能
    caption: Android App：课堂控制
    build: 2026-10 初的测试构建
    kind: phone
  - src: ../../assets/projects/remoteci/shots/watch-home.webp
    alt: Wear OS 手表首页，显示“上课 物理 19:25-20:05”
    caption: Wear OS：课程状态
    build: 2026-10 初的测试构建
    kind: watch
releases:
  - version: "3.3.1.5"
    date: 2026-10-15
    notes:
      - 插件从未同步过课表的班级，课表页、访客页和老师的“我的日程”按班级档案推算七天课表
      - 新账号可以不设初始密码，首次登录时再设置
      - 一科多位老师可以写成“张三/李四”，各自匹配到这门课
  - version: "3.3.1.4"
    date: 2026-10-11
    prerelease: true
    notes:
      - 扩展插件设置页支持分区、可折叠卡片、颜色字段和联动条件，按插件在 ClassIsland 里的样子展示
      - 系统配置新增“手动上传更新包（调试）”
  - version: "3.3.1.3"
    date: 2026-10-11
    prerelease: true
    notes:
      - 取消“默认班级”，首次部署改为在网页上的初始化向导里创建系统管理员和第一个班级
      - 最近一次同步的课表、扩展功能和插件设置保存到数据库，服务端重启后仍可查看
      - WebUI 登录页新增手机扫码登录；手机 App 自动检查更新
  - version: "3.3.1.2"
    date: 2026-10-10
    prerelease: true
    notes:
      - 扩展插件可以逐个开放给班主任自行管理
      - 课表表格固定按周一到周日排列，并标出今天
  - version: "3.3.1.0"
    date: 2026-10-09
    notes:
      - 新增服务端档案库、班级档案页，可从设备收集档案、编辑临时层并下发
      - 自动获取法定节假日与调休安排，放假日关闭课表，调休上学日补课
      - 飞牛 fnOS 与 Docker 部署支持在 WebUI 中自更新
  - version: "3.3.0.2"
    date: 2026-10-07
    notes:
      - 老师临时换课申请：发起、审批，以及按权限强制换课
      - 个人通知中心和浏览器推送
      - Android 桌面小组件与“上课状态”常驻通知
  - version: "3.3.0.0"
    date: 2026-09-28
    notes:
      - 支持多个班级；换课可选“永久换课”
      - 插件上报软件清单，可远程管理插件
---

## 组成

| 组件 | 运行在 | 作用 |
| --- | --- | --- |
| ClassIsland 插件 | 教室电脑上的 ClassIsland 2.x | 读取课表和课堂状态，执行通知、换课、电源等命令；可开启局域网服务供手机和手表直连 |
| 服务端 | Windows、Linux、Docker 或飞牛 fnOS | 账号、设备会话和权限的唯一来源；中转状态与命令；提供 WebUI 和 REST API；数据存在 SQLite |
| WebUI | 浏览器 | 课表、控制、批量控制、档案、班级与人员管理、系统配置 |
| Android 手机 App | Android 8.0 及以上 | 课表、我的日程、换课、课堂控制、桌面小组件、“上课状态”常驻通知 |
| Wear OS 手表 App | Wear OS 3 及以上 | 课程状态、课表、换课、发送通知和语音 |

```text
ClassIsland + RemoteCI 插件
           ⇅ WebSocket / 局域网
ASP.NET Core 服务端 ─── WebUI
           ⇅ 云端或局域网
     Android 手机 / Wear OS 手表
```

插件只保存不含密码的授权镜像，真正访问 ClassIsland 的也只有插件。授权镜像离线超过 24 小时后，插件只保留课程展示，拒绝所有管理命令。

## 课程状态与七日课表

- 插件每秒推送当前课程、下一节课、当前和下一时间段、上课或课间剩余时间、课表方案，以及主界面、音量、电源的可用状态。
- 服务端保存插件最近一次同步的未来七天课表。插件离线、甚至服务端重启后，WebUI、手机和手表仍能看到这份课表，页面会注明来自哪次同步。
- 插件从未同步过课表的班级，只要在“档案”页保存了班级档案，就按档案推算七天课表（预定课表、临时层、星期、轮换周和调休都会计算），页面标注“按本班当前档案推算”，只能查看。
- 课表表格固定按周一到周日排列，今天所在列用浅绿色标出；“今天”按教室端的时区计算。
- 系统管理员和获准的班主任可以“立即拉取课表”。系统管理员还能把自动拉取周期设为关闭、每 15 分钟、每小时、每 6 小时或每天。手动拉取、自动拉取和插件主动推送共用一个任务锁，不会重复执行。
- 调休：服务端自动获取法定节假日和调休安排。放假日关闭教室课表，周末调休上学的日子自动建立补对应工作日课程的临时课表；系统管理员可以在“调休”页修改补哪天的课，或关闭这个功能。

## 换课

- 课表页可以互换同一天的两节课，或把一节课替换成另一门科目。提交时带上课表修订号，服务端按当前课表核对，避免覆盖别人刚做的修改。
- 默认只改当天。勾选“永久换课”会写入 ClassIsland 的源课表，之后每周继续生效。WebUI、手机和手表用的是同一套字段。
- 老师换课申请：老师不需要“换课”权限也能找其他老师换课。可以“互换两节课”（两节课可以在不同班级、不同日期，至少一节是自己的）或“替换为我的课”；必须填写理由。申请发给对方老师审批，对方没有账号时由该班班主任审批，通过时会按最新课表再核对一次。
- 换课后会记录这节课的临时任课老师，手机、手表、WebUI 课表和个人日程都按实际上课的老师显示。
- 强制换课：系统管理员可以给某个角色开启（默认关闭）。确认后不经审批直接换课并通知对方，对方可以撤回。
- 换课提醒会出现在 WebUI 顶栏铃铛、浏览器推送（需要 HTTPS）、手机通知和已绑定的 AstrBot 会话里。

## 课堂控制

WebUI 的“控制”页、手机和手表使用同一套命令和权限，结果都是插件的真实回执；插件离线或超时会直接失败，不会悄悄排队。

- 发送通知：标题最多 60 字、正文最多 500 字；可设持续时间（最长 3600 秒）、重复次数（最多 10 次）、正文滚动，以及强调特效、提醒音效和文字朗读。
- 清除当前提醒；显示或隐藏 ClassIsland 主界面。
- 音量：拖动音量条后自动提交，静音时调高音量会同时取消静音。
- 电源：关机、重启、睡眠或休眠，提交前需要再确认一次；休眠只在插件报告可用时出现。
- 语音消息：在 WebUI 或手表上录音，每条最长 60 秒；教室端以浮窗自动播放，可拖动进度。需要单独的“发送语音”权限，浏览器需通过 HTTPS 或 localhost 访问才能录音，服务器不保留录音。
- 扩展功能：其他 ClassIsland 插件可以向 RemoteCI 注册远程操作和设置页，控制页按插件分组列出，带参数的操作会弹出表单。管理员可以逐项启用、开放给非管理员，并决定是否显示在手表上。

## 批量控制

面向管理很多教室的情况。流程分两步：先选功能卡片并填写参数，再选择目标班级、分组或具体设备。按班级或分组选择时，每个班只发给最早接入的那台在线设备；结果逐台显示。

- 课堂控制：通知广播、清除通知、电源控制、语音消息。
- 插件管理：批量安装插件（从 ClassIsland 官方插件市场解析依赖并下载）、卸载、启用或禁用，重启 ClassIsland 后生效。RemoteCI 会拒绝对它自己执行这些操作，避免失去远程控制。
- 软件更新：刷新版本清单、升级插件、升级 ClassIsland 主程序。设备列表显示每台设备的 ClassIsland 版本、RemoteCI 插件版本、已加载插件和最近一次升级状态。
- 加入集控：上传 ClassIsland 的 `ManagementPreset.json`，设备按其中的服务器类型加入 ClassIsland 内置集控，集控 ID 自动使用所属班级名。
- 远程终端：在设备上以当前登录用户执行一条 `cmd` 命令并取回输出。命令最长 4000 字符，超时 1–10 秒，输出最多 64K 字符。
- 文件分发：把不超过 10 MB 的文件发到设备的桌面、下载或文档文件夹，默认不覆盖同名文件。
- 升级、插件管理、加入集控、远程终端和文件分发都属于高风险操作，只允许系统管理员执行，并且要在目标弹窗里再勾选一次确认。

## 档案管理

“档案”指 ClassIsland 的时间表、课表和科目。服务端可以保存一份源档案，由管理员统一编辑后下发到教室电脑。

- 全局档案是模板，分配给班级后生成该班的独立副本；班主任只能管理本班副本。
- 上传 ClassIsland 的 JSON 档案（每份不超过 5 MB），先看解析预览再保存；也可以导出给 ClassIsland 直接使用。编辑时保留未修改的字段和未知字段。
- 从设备收集：读取在线教室电脑上正在使用的档案（包括临时层），作为草稿载入。
- 临时层：按日期新建、编辑或清理只替换某一天的课表，可以单独调整当天的时间。
- 批量编辑：同时编辑多个班级，一次保存；有人改过其中某个班时整批不生效，草稿保留。
- 下发有四种方式：更新当前档案、整体替换所选类别、创建并启用新档案、作为临时层下发。保存和下发是两步，只有已保存且修订号一致的版本才能下发。

## 班级、账号与权限

- 班级可以按学校、年级或校区组织成多层分组树。勾选多个班级后，可以批量开关访客、调整分组或删除。
- 内置管理员、班主任、老师、学生四种角色，也可以新建角色。权限逐项分配：概览、人员管理、发送通知、换课、电源与音量、扩展功能、主界面、发送语音、API 访问、老师主动换课、强制换课。
- 老师账号不用加入班级：服务端拿账号名和课表里科目的教师名比对，一致的班级就是任教班级。老师和班主任都有“我的日程”，按日期列出自己在各班的课。
- “班主任权限”面板统一决定班主任能否修改本班班名、上传班级头像、手动拉取本班课表；插件设置则按插件逐个开放给班主任。
- 成员和班级都可以用 Excel 模板批量导入；导出后修改再“覆盖导入”时会先完整校验，只新增和修改，不删除。
- 系统管理员只能由本人修改。客户端隐藏按钮不算权限控制，服务端和插件执行端都会重新检查。

## 访客页与登录

- 管理员可以给班级开放访客访问。访客页不需要登录，只能切换班级查看课表；班级较多时可按分组筛选。
- 登录页可以设置主题、背景图（PNG、JPEG 或 WebP，不超过 2 MB）、背景不透明度和登录卡片位置。
- 手机扫码登录：在电脑上打开登录页的二维码，用已登录的手机 App 扫描并确认，电脑浏览器就直接登录。二维码只包含一次性挑战码，3 分钟内有效，被别人拍到也无法冒用。
- 首次部署时，WebUI 会进入初始化向导，在网页上创建系统管理员和第一个班级，不再生成随机初始密码。

## 手机与手表

- Android App 使用 Material 3 Expressive，提供今日状态、七日课表、我的日程、换课、课堂控制和管理入口；能访问多个班级的账号可以切换当前班级。
- 桌面小组件：当前时间状态（2×2、4×2）、今日课表（4×2、4×4）和换课（2×2），尺寸按小米澎湃 OS 小部件规范实现，其他启动器同样可以添加。
- 上学期间显示“上课状态”常驻通知：时间状态、这节课、剩余时间和下一节课；在系统支持时使用澎湃 OS 焦点通知、超级岛、息屏显示和 Android 16 实时更新。
- 手机 App 打开时自动检查更新（至少间隔 6 小时），可选正式版或 Beta 渠道。
- Wear OS：旋转表冠在课程状态页和菜单页之间切换；点课程按钮可以直接换课；能发送通知和语音。上课、课间、放学、课表变更、自定义消息、ClassIsland 自动化提醒和第三方插件通知七类事件可以逐类开关。
- 手机和手表都可以选浅色、深色或跟随系统，并在六套配色之间切换。
- 作者目前主要精力放在 WebUI 的集控功能上，Android 和 Wear OS 端的功能更新可能慢一些。

## 连接与安全

- 两种连接方式：手机和手表在同一网络里直连插件（默认端口 8765），或者经服务端中转（默认端口 8080）。两种都开启时先试局域网，失败再走云端。
- 局域网认证使用一次性 HMAC 挑战（30 秒过期，先作废再校验），不传账号密码，也不传云端令牌。手表可以通过 UDP 48765 扫描局域网里的插件。
- 生产环境必须通过 HTTPS / WSS 访问。手表的设备密钥由 Android Keystore 加密保存，插件不接收学生密码，也不保存密码哈希。
- 账号密码、权限、插件凭据或设备会话变化时，已有连接会立即刷新或断开。

## API 与 AI 助手

- REST API 和 WebUI 使用同一组 `/api/*` 接口。有“API 访问”权限的账号可以在“个人账号 → API Key”创建密钥；密钥明文只显示一次，服务端只保存摘要，权限按账号当前角色实时计算。
- 老师可以用 `GET /api/me/schedule` 和 `GET /api/me/schedule/next` 读取自己的日程和下一节课。
- 仓库附带 `remoteci` Skill，让 AI 助手以你的账号工作：学生查课表，老师问下节课去哪个班，班主任控制本班，系统管理员创建和管理班级、分组和人员。
- 配合 AstrBot 插件，可以在聊天机器人里用 `/rci` 命令查询课表、修改班级名称和头像，并接收换课提醒。

## 安装

1. 在 [GitHub Releases](https://github.com/Edge-HH/RemoteCI/releases) 下载服务端：Windows 或 Linux 压缩包、Docker（仓库内的 `compose.yaml`），或飞牛 fnOS 的 FPK（在线包，以及 x86_64 / ARM64 离线包）。
2. 启动服务端，在 WebUI 的初始化向导里创建系统管理员和第一个班级。公网访问需要在前面放一个 HTTPS 反向代理。
3. 在 WebUI“概览”页为班级生成一次性配对码，填到 ClassIsland 的 RemoteCI 设置里。插件通过 ClassIsland 插件市场安装和更新。
4. 手机和手表安装 Release 里的 `RemoteCI.Mobile` 与 `RemoteCI.Watch` APK，用自己的账号登录。

服务端可以在 WebUI“系统配置 → 系统更新”中选择正式版或 Beta 渠道自动更新（fnOS 由应用中心更新）。部署、反向代理和备份的完整说明见[使用文档](https://edge-hh.github.io/RemoteCI-Docs/)。

## 系统要求

- 教室电脑：Windows，ClassIsland 2.x。
- 服务端：Windows x64 或 Linux x64（压缩包需要 .NET 10 运行时），或 Docker、飞牛 fnOS；公网使用需要 HTTPS。
- 手机：Android 8.0 及以上。手表：Wear OS 3 及以上。
- 版本号为四段数字（如 3.3.1.5），通信协议 V3 与软件版本独立，3.x 各端之间可以互通。
