# 快速开始

<div class="card-grid">
  <a class="card" href="#step-setup">
    <div class="card-title">初始化</div>
    <div class="card-desc">工作区、向导与基础配置。</div>
    <div class="card-cta">跳转 -&gt;</div>
  </a>
  <a class="card" href="#step-onboard">
    <div class="card-title">向导配置</div>
    <div class="card-desc">运行 CLI 引导并安装守护进程。</div>
    <div class="card-cta">跳转 -&gt;</div>
  </a>
  <a class="card" href="#step-config">
    <div class="card-title">模型与通道</div>
    <div class="card-desc">配置模型、通道与密钥。</div>
    <div class="card-cta">跳转 -&gt;</div>
  </a>
  <a class="card" href="#step-health">
    <div class="card-title">状态与诊断</div>
    <div class="card-desc">查看状态并进行健康检查。</div>
    <div class="card-cta">跳转 -&gt;</div>
  </a>
</div>

<h2 id="step-setup">1. 初始化工作区</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw setup` | 初始化配置与默认工作区。 |
| `openclaw setup --workspace /path/to/workspace` | 指定工作区路径进行初始化。 |
| `openclaw setup --wizard` | 进入引导式向导。 |

<h2 id="step-onboard">2. CLI 引导配置</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw onboard` | 运行 CLI 引导流程，完成基础配置。 |
| `openclaw onboard --install-daemon` | 引导过程中安装后台守护进程。 |
| `openclaw onboard --mode local` | 使用本地模型模式进行配置。 |

<h2 id="step-config">3. 配置模型与通道</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw configure` | 打开交互式配置向导。 |
| `openclaw configure --section models --section channels` | 直接进入模型与通道配置区。 |
| `openclaw config get gateway.auth.token` | 读取某个配置键。 |
| `openclaw config set gateway.port 19001 --json` | 修改配置键并以 JSON 解析值。 |
| `openclaw config unset tools.web.search.apiKey` | 删除某个配置键。 |

<h2 id="step-health">4. 状态与诊断</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw status` | 获取当前状态摘要。 |
| `openclaw status --all` | 输出更全面的状态信息。 |
| `openclaw status --deep` | 启用深度探测，包含更多细节。 |
| `openclaw health --json` | 健康检查并以 JSON 输出。 |
| `openclaw doctor` | 运行健康检查并定位常见问题。 |
| `openclaw doctor --fix` | 在检测到问题时尝试自动修复。 |

<h2 id="step-dashboard">5. 控制台与日志</h2>

| 命令 | 说明 |
| --- | --- |
| `openclaw dashboard` | 打开控制台界面。 |
| `openclaw dashboard --no-open` | 只启动服务，不自动打开浏览器。 |
| `openclaw logs --follow` | 实时跟随日志输出。 |
| `openclaw logs --limit 500` | 限制日志条数，便于快速查看。 |

> 接下来建议阅读 **命令大全**，按场景快速定位所需命令。
