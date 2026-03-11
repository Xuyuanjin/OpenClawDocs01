<div class="hero">
  <div class="hero-card code-card side-card">
    <div class="card-title">常用命令速览（配置）</div>
    <table>
      <thead>
        <tr>
          <th>命令</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>openclaw onboard</code></td>
          <td>运行 CLI 新手引导，完成网关、通道与工作区的基础配置。</td>
        </tr>
        <tr>
          <td><code>openclaw configure</code></td>
          <td>打开交互式配置向导，快速修改模型与通道设置。</td>
        </tr>
        <tr>
          <td><code>openclaw config get gateway.auth.token</code></td>
          <td>读取指定配置键，用于确认网关令牌与连接信息。</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="hero-card primary-card">
    <div class="eyebrow">OpenClaw CLI</div>
    <h1>OpenClaw 文档</h1>
    <p>面向自动化与智能代理的命令行工作台。覆盖初始化、网关、通道与消息、模型与插件的完整操作路径。</p>
    <div class="hero-actions">
      <a class="btn primary" href="/zh/quickstart">快速开始</a>
      <a class="btn ghost" href="/zh/commands">命令大全</a>
    </div>
    <div class="meta-row">
      <span class="pill">Glass UI</span>
      <span class="pill">Bilingual</span>
      <span class="pill">CLI First</span>
    </div>
  </div>
  <div class="hero-card code-card side-card">
    <div class="card-title">常用命令速览（运行）</div>
    <table>
      <thead>
        <tr>
          <th>命令</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>openclaw gateway status</code></td>
          <td>查看网关服务状态，并可附带 RPC 探测。</td>
        </tr>
        <tr>
          <td><code>openclaw logs --follow</code></td>
          <td>实时跟踪网关日志，便于排查故障。</td>
        </tr>
        <tr>
          <td><code>openclaw status --all</code></td>
          <td>输出更全面的状态摘要，便于快速确认当前运行状态。</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card-grid">
  <a class="card" href="/zh/quickstart">
    <div class="card-title">快速开始</div>
    <div class="card-desc">安装、向导、配置与健康检查，一次跑通。</div>
    <div class="card-cta">进入流程 -&gt;</div>
  </a>
  <a class="card" href="/zh/cli-reference">
    <div class="card-title">CLI 参考</div>
    <div class="card-desc">全局参数、命令树与常用约定。</div>
    <div class="card-cta">查看结构 -&gt;</div>
  </a>
  <a class="card" href="/zh/commands">
    <div class="card-title">命令大全</div>
    <div class="card-desc">按场景整理的高频命令与解释。</div>
    <div class="card-cta">立即查找 -&gt;</div>
  </a>
  <a class="card" href="/zh/commands#gateway">
    <div class="card-title">网关运维</div>
    <div class="card-desc">运行、探测、发现、服务管理一页掌握。</div>
    <div class="card-cta">跳转章节 -&gt;</div>
  </a>
</div>

## 项目介绍
OpenClaw 是一个面向多通道与多模型的自动化/代理工作台，强调 CLI 可脚本化与可观测性，适合将“工具 + 模型 + 规则”组装成可复用的工作流。

- **CLI 优先**：所有能力都可脚本化，便于融入流水线与运维流程。
- **Gateway 统一入口**：以网关聚合能力入口，统一鉴权、路由与调用。
- **Channel & Message**：一套命令管理多通道消息收发与目标解析。
- **Agent & Session**：代理配置、身份、会话状态清晰可追溯。
- **可观测性**：状态、健康检查、日志与诊断一体化。

## 你可以快速完成的事
- 初始化配置与工作区
- 运行/诊断网关服务
- 接入多通道消息并发送指令
- 选择模型与配置回退
- 安装插件、检查技能与权限

## 页面结构
- **快速开始**：最短路径完成安装与首个指令
- **CLI 参考**：命令树与全局参数速查
- **命令大全**：按场景拆分的常用命令

> 提示：卡片支持悬浮高亮，点击即可跳转到对应章节。
