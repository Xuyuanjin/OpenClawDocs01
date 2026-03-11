# Quickstart

<div class="card-grid">
  <a class="card" href="#step-setup">
    <div class="card-title">Setup</div>
    <div class="card-desc">Workspace, wizard, and base config.</div>
    <div class="card-cta">Jump -&gt;</div>
  </a>
  <a class="card" href="#step-onboard">
    <div class="card-title">Onboarding</div>
    <div class="card-desc">Run the CLI onboarding flow.</div>
    <div class="card-cta">Jump -&gt;</div>
  </a>
  <a class="card" href="#step-config">
    <div class="card-title">Models & Channels</div>
    <div class="card-desc">Configure models, channels, and secrets.</div>
    <div class="card-cta">Jump -&gt;</div>
  </a>
  <a class="card" href="#step-health">
    <div class="card-title">Health & Logs</div>
    <div class="card-desc">Check status and diagnose issues.</div>
    <div class="card-cta">Jump -&gt;</div>
  </a>
</div>

<h2 id="step-setup">1. Workspace setup</h2>

| Command | What it does |
| --- | --- |
| `openclaw setup` | Initialize OpenClaw config and workspace. |
| `openclaw setup --workspace /path/to/workspace` | Initialize with a specific workspace path. |
| `openclaw setup --wizard` | Enter the guided setup flow. |

<h2 id="step-onboard">2. CLI onboarding</h2>

| Command | What it does |
| --- | --- |
| `openclaw onboard` | Run the onboarding flow. |
| `openclaw onboard --install-daemon` | Install the daemon during onboarding. |
| `openclaw onboard --mode local` | Configure in local-model mode. |

<h2 id="step-config">3. Configure models and channels</h2>

| Command | What it does |
| --- | --- |
| `openclaw configure` | Open the interactive configuration wizard. |
| `openclaw configure --section models --section channels` | Jump directly to model and channel sections. |
| `openclaw config get gateway.auth.token` | Read a config key. |
| `openclaw config set gateway.port 19001 --json` | Update a config key with JSON parsing. |
| `openclaw config unset tools.web.search.apiKey` | Remove a config key. |

<h2 id="step-health">4. Status and diagnostics</h2>

| Command | What it does |
| --- | --- |
| `openclaw status` | Get a status summary. |
| `openclaw status --all` | Show more complete status output. |
| `openclaw status --deep` | Enable deep probing for additional details. |
| `openclaw health --json` | Run health checks and output JSON. |
| `openclaw doctor` | Run diagnostics and highlight issues. |
| `openclaw doctor --fix` | Attempt automatic fixes where possible. |

<h2 id="step-dashboard">5. Dashboard and logs</h2>

| Command | What it does |
| --- | --- |
| `openclaw dashboard` | Open the dashboard UI. |
| `openclaw dashboard --no-open` | Start the service without opening a browser. |
| `openclaw logs --follow` | Follow logs in real time. |
| `openclaw logs --limit 500` | Limit the number of log lines. |

> Next: go to **Command Index** to locate commands by scenario.
