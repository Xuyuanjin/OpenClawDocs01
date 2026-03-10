# 命令大全

本页按场景整理常用命令，并确保**每行命令都有对应说明**。

<div class="card-grid">
  <a class="card" href="#setup">
    <div class="card-title">初始化与配置</div>
    <div class="card-desc">setup / onboard / configure / config / doctor</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#health">
    <div class="card-title">状态与日志</div>
    <div class="card-desc">status / health / logs / dashboard</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#gateway">
    <div class="card-title">网关与服务</div>
    <div class="card-desc">gateway 运行、探测、服务管理</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#channels">
    <div class="card-title">通道与消息</div>
    <div class="card-desc">channels / message</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#agents">
    <div class="card-title">代理与会话</div>
    <div class="card-desc">agent / agents / sessions</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#models">
    <div class="card-title">模型与回退</div>
    <div class="card-desc">models / aliases / fallbacks</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#tools">
    <div class="card-title">工具与自动化</div>
    <div class="card-desc">browser / cron</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#extensions">
    <div class="card-title">插件、技能与审批</div>
    <div class="card-desc">plugins / skills / approvals</div>
    <div class="card-cta">查看命令 →</div>
  </a>
  <a class="card" href="#system">
    <div class="card-title">系统与维护</div>
    <div class="card-desc">sandbox / docs / update / uninstall</div>
    <div class="card-cta">查看命令 →</div>
  </a>
</div>

<h2 id="setup">初始化与配置</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw setup` | 初始化 OpenClaw 配置与工作区。 |
| `openclaw setup --workspace /path/to/workspace` | 指定工作区路径进行初始化。 |
| `openclaw setup --wizard` | 进入引导式向导流程。 |
| `openclaw onboard` | 运行 CLI 新手引导配置。 |
| `openclaw onboard --install-daemon` | 在引导中安装守护进程。 |
| `openclaw configure` | 打开交互式配置向导。 |
| `openclaw configure --section models --section channels` | 直接进入模型与通道配置区。 |
| `openclaw config` | 打开配置向导（与 configure 等效）。 |
| `openclaw config get gateway.auth.token` | 读取配置键。 |
| `openclaw config set gateway.port 19001 --json` | 设置配置键并以 JSON 解析值。 |
| `openclaw config unset tools.web.search.apiKey` | 删除配置键。 |
| `openclaw doctor` | 运行健康检查并定位常见问题。 |
| `openclaw doctor --fix` | 尝试自动修复检测到的问题。 |

<h2 id="health">状态与日志</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw status` | 获取状态摘要。 |
| `openclaw status --all` | 输出更全面的状态信息。 |
| `openclaw status --deep` | 启用深度探测，获得更多细节。 |
| `openclaw health --json` | 健康检查并以 JSON 输出。 |
| `openclaw dashboard` | 启动并打开控制台界面。 |
| `openclaw dashboard --no-open` | 仅启动服务，不自动打开浏览器。 |
| `openclaw logs` | 查看日志列表或摘要。 |
| `openclaw logs --follow` | 实时跟踪日志输出。 |
| `openclaw logs --limit 500` | 限制输出行数。 |
| `openclaw logs --json` | 以 JSON 输出日志数据。 |

<h2 id="gateway">网关与服务</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw gateway` | 网关命令入口。 |
| `openclaw gateway run` | 运行网关服务。 |
| `openclaw gateway status` | 查看网关状态，可附带 RPC 探测。 |
| `openclaw gateway status --json` | 以 JSON 输出网关状态。 |
| `openclaw gateway status --deep` | 深度探测网关状态。 |
| `openclaw gateway probe` | 执行 RPC 探测。 |
| `openclaw gateway discover` | 发现网关可用方法。 |
| `openclaw gateway call <method> --params '{"a":1}'` | 调用网关方法并传入参数。 |
| `openclaw gateway install` | 安装网关为服务。 |
| `openclaw gateway start` | 启动网关服务。 |
| `openclaw gateway stop` | 停止网关服务。 |
| `openclaw gateway restart` | 重启网关服务。 |
| `openclaw gateway uninstall` | 卸载网关服务。 |

<h2 id="channels">通道与消息</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw channels list` | 列出已配置通道。 |
| `openclaw channels status --channel telegram` | 查询通道状态。 |
| `openclaw channels capabilities --channel discord --target channel:123` | 查看目标通道可用能力。 |
| `openclaw channels resolve --channel slack "#general"` | 解析通道或用户标识。 |
| `openclaw channels logs --channel all` | 查看通道相关日志。 |
| `openclaw channels add --channel telegram --token TOKEN` | 添加通道并配置令牌。 |
| `openclaw channels remove --channel telegram --delete` | 移除通道并删除配置。 |
| `openclaw channels login --channel whatsapp` | 登录指定通道账号。 |
| `openclaw channels logout --channel whatsapp` | 退出指定通道账号。 |
| `openclaw message <subcommand> [flags]` | 消息操作入口（发送、投票、反应等）。 |
| `openclaw message poll --channel discord --target channel:123 --poll-question "Snack?" --poll-option Pizza --poll-option Sushi` | 在 Discord 发起投票。 |

<h2 id="agents">代理与会话</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw agent --agent ops --message "Summarize logs"` | 运行指定代理并发送消息。 |
| `openclaw agent --message "status update" --deliver` | 运行代理并投递消息。 |
| `openclaw agents list` | 列出代理配置。 |
| `openclaw agents add work --workspace ~/.openclaw/workspace-work` | 添加代理并绑定工作区。 |
| `openclaw agents set-identity --agent main --name "OpenClaw"` | 设置代理身份信息。 |
| `openclaw agents delete work` | 删除代理。 |
| `openclaw sessions` | 查看会话列表。 |
| `openclaw sessions --active` | 仅查看活跃会话。 |
| `openclaw sessions --json` | 以 JSON 输出会话信息。 |

<h2 id="models">模型与回退</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw models list` | 列出可用模型。 |
| `openclaw models status` | 查看当前模型状态。 |
| `openclaw models set openai/gpt-4o-mini` | 设置默认模型。 |
| `openclaw models set-image openai/gpt-4o-mini` | 设置默认图像模型。 |
| `openclaw models aliases list` | 查看模型别名。 |
| `openclaw models aliases add --name fast --model openai/gpt-4o-mini` | 添加模型别名。 |
| `openclaw models aliases remove --name fast` | 移除模型别名。 |
| `openclaw models fallbacks list` | 查看模型回退列表。 |
| `openclaw models fallbacks add --model openai/gpt-4o-mini --fallback openai/gpt-4o` | 添加模型回退。 |
| `openclaw models fallbacks remove --model openai/gpt-4o-mini --fallback openai/gpt-4o` | 移除模型回退。 |
| `openclaw models scan` | 扫描可用模型并生成候选列表。 |

<h2 id="tools">工具与自动化</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw browser --browser-profile chrome tabs` | 列出指定浏览器 profile 的标签页。 |
| `openclaw browser snapshot --format aria` | 生成页面快照并以 ARIA 格式输出。 |
| `openclaw browser open https://docs.openclaw.ai` | 打开指定网址。 |
| `openclaw browser click <ref>` | 对引用元素执行点击操作。 |
| `openclaw browser type <ref> "hello"` | 向目标元素输入文本。 |
| `openclaw browser screenshot` | 截图当前页面。 |
| `openclaw browser create-profile --name work --color "#FF5A36"` | 创建浏览器 profile。 |
| `openclaw browser delete-profile --name work` | 删除浏览器 profile。 |
| `openclaw cron edit <job-id> --announce --channel telegram --to "123456789"` | 编辑定时任务并通知指定通道。 |
| `openclaw cron edit <job-id> --no-deliver` | 编辑定时任务但不自动投递。 |

<h2 id="extensions">插件、技能与审批</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw plugins list` | 列出已安装插件。 |
| `openclaw plugins install @openclaw/voice-call` | 安装官方插件。 |
| `openclaw plugins install -l ./my-plugin` | 从本地路径安装插件。 |
| `openclaw plugins enable <id>` | 启用插件。 |
| `openclaw plugins disable <id>` | 禁用插件。 |
| `openclaw plugins doctor` | 诊断插件问题。 |
| `openclaw plugins update --all` | 更新全部插件。 |
| `openclaw skills list` | 列出技能。 |
| `openclaw skills list --eligible` | 查看可安装技能。 |
| `openclaw skills info <name>` | 查看技能信息。 |
| `openclaw skills check <name>` | 检查技能状态。 |
| `openclaw approvals get` | 获取审批配置。 |
| `openclaw approvals get --gateway` | 查看网关审批配置。 |
| `openclaw approvals set --file ./exec-approvals.json` | 从文件设置审批策略。 |
| `openclaw approvals allowlist add "/usr/bin/uptime" --agent main` | 添加 allowlist 规则。 |
| `openclaw approvals allowlist remove "/usr/bin/uptime" --agent main` | 移除 allowlist 规则。 |

<h2 id="system">系统与维护</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw sandbox explain` | 查看沙箱机制说明。 |
| `openclaw sandbox list` | 列出沙箱配置。 |
| `openclaw sandbox list --json` | 以 JSON 输出沙箱配置。 |
| `openclaw sandbox recreate --all` | 重新创建所有沙箱。 |
| `openclaw sandbox recreate --agent ops` | 仅重建指定代理的沙箱。 |
| `openclaw docs <query>` | 搜索文档内容。 |
| `openclaw update` | 更新 CLI/组件。 |
| `openclaw update status` | 查看更新状态。 |
| `openclaw update wizard` | 进入更新向导。 |
| `openclaw update --channel beta` | 切换更新通道。 |
| `openclaw reset` | 重置配置或缓存。 |
| `openclaw uninstall` | 卸载 OpenClaw。 |
| `openclaw uninstall --all --yes` | 无提示卸载全部组件。 |
| `openclaw uninstall --dry-run` | 预览卸载范围，不实际执行。 |

> 以上命令来自官方 CLI 文档，更多参数请用 `openclaw <command> --help` 查看。
