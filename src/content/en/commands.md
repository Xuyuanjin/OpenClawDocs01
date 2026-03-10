# Command Index

This page groups common commands by scenario and ensures **every command line has a matching explanation**.

<div class="card-grid">
  <a class="card" href="#setup">
    <div class="card-title">Setup & Config</div>
    <div class="card-desc">setup / onboard / configure / config / doctor</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#health">
    <div class="card-title">Status & Logs</div>
    <div class="card-desc">status / health / logs / dashboard</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#gateway">
    <div class="card-title">Gateway & Service</div>
    <div class="card-desc">gateway run, probe, discover, service</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#channels">
    <div class="card-title">Channels & Message</div>
    <div class="card-desc">channels / message</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#agents">
    <div class="card-title">Agents & Sessions</div>
    <div class="card-desc">agent / agents / sessions</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#models">
    <div class="card-title">Models & Fallbacks</div>
    <div class="card-desc">models / aliases / fallbacks</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#tools">
    <div class="card-title">Tools & Automation</div>
    <div class="card-desc">browser / cron</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#extensions">
    <div class="card-title">Plugins, Skills, Approvals</div>
    <div class="card-desc">plugins / skills / approvals</div>
    <div class="card-cta">Jump →</div>
  </a>
  <a class="card" href="#system">
    <div class="card-title">System & Maintenance</div>
    <div class="card-desc">sandbox / docs / update / uninstall</div>
    <div class="card-cta">Jump →</div>
  </a>
</div>

<h2 id="setup">Setup & Configuration</h2>

| Command | What it does |
| --- | --- |
| `openclaw setup` | Initialize OpenClaw config and workspace. |
| `openclaw setup --workspace /path/to/workspace` | Initialize with a specific workspace path. |
| `openclaw setup --wizard` | Enter the guided setup flow. |
| `openclaw onboard` | Run the onboarding flow. |
| `openclaw onboard --install-daemon` | Install the daemon during onboarding. |
| `openclaw configure` | Open the interactive configuration wizard. |
| `openclaw configure --section models --section channels` | Jump directly to model and channel sections. |
| `openclaw config` | Open the config wizard (same as configure). |
| `openclaw config get gateway.auth.token` | Read a config key. |
| `openclaw config set gateway.port 19001 --json` | Update a config key with JSON parsing. |
| `openclaw config unset tools.web.search.apiKey` | Remove a config key. |
| `openclaw doctor` | Run diagnostics and highlight issues. |
| `openclaw doctor --fix` | Attempt automatic fixes where possible. |

<h2 id="health">Status & Logs</h2>

| Command | What it does |
| --- | --- |
| `openclaw status` | Get a status summary. |
| `openclaw status --all` | Show more complete status output. |
| `openclaw status --deep` | Enable deep probing for additional details. |
| `openclaw health --json` | Run health checks and output JSON. |
| `openclaw dashboard` | Open the dashboard UI. |
| `openclaw dashboard --no-open` | Start the service without opening a browser. |
| `openclaw logs` | View log output. |
| `openclaw logs --follow` | Follow logs in real time. |
| `openclaw logs --limit 500` | Limit the number of log lines. |
| `openclaw logs --json` | Output logs as JSON. |

<h2 id="gateway">Gateway & Service</h2>

| Command | What it does |
| --- | --- |
| `openclaw gateway` | Gateway command entry point. |
| `openclaw gateway run` | Run the gateway service. |
| `openclaw gateway status` | Check gateway status with optional RPC probing. |
| `openclaw gateway status --json` | Output gateway status as JSON. |
| `openclaw gateway status --deep` | Run a deeper status probe. |
| `openclaw gateway probe` | Execute an RPC probe. |
| `openclaw gateway discover` | Discover available gateway methods. |
| `openclaw gateway call <method> --params '{"a":1}'` | Call a gateway method with params. |
| `openclaw gateway install` | Install the gateway as a service. |
| `openclaw gateway start` | Start the gateway service. |
| `openclaw gateway stop` | Stop the gateway service. |
| `openclaw gateway restart` | Restart the gateway service. |
| `openclaw gateway uninstall` | Uninstall the gateway service. |

<h2 id="channels">Channels & Message</h2>

| Command | What it does |
| --- | --- |
| `openclaw channels list` | List configured channels. |
| `openclaw channels status --channel telegram` | Check channel status. |
| `openclaw channels capabilities --channel discord --target channel:123` | Inspect channel capabilities for a target. |
| `openclaw channels resolve --channel slack "#general"` | Resolve channel/user identifiers. |
| `openclaw channels logs --channel all` | View channel logs. |
| `openclaw channels add --channel telegram --token TOKEN` | Add a channel with token. |
| `openclaw channels remove --channel telegram --delete` | Remove a channel and delete config. |
| `openclaw channels login --channel whatsapp` | Log in to a channel account. |
| `openclaw channels logout --channel whatsapp` | Log out of a channel account. |
| `openclaw message <subcommand> [flags]` | Messaging entry point (send/poll/react/etc.). |
| `openclaw message poll --channel discord --target channel:123 --poll-question "Snack->" --poll-option Pizza --poll-option Sushi` | Create a poll in Discord. |

<h2 id="agents">Agents & Sessions</h2>

| Command | What it does |
| --- | --- |
| `openclaw agent --agent ops --message "Summarize logs"` | Run an agent with a message. |
| `openclaw agent --message "status update" --deliver` | Run an agent and deliver output. |
| `openclaw agents list` | List agent configurations. |
| `openclaw agents add work --workspace ~/.openclaw/workspace-work` | Add an agent bound to a workspace. |
| `openclaw agents set-identity --agent main --name "OpenClaw"` | Set agent identity. |
| `openclaw agents delete work` | Delete an agent. |
| `openclaw sessions` | List sessions. |
| `openclaw sessions --active` | Show only active sessions. |
| `openclaw sessions --json` | Output sessions as JSON. |

<h2 id="models">Models & Fallbacks</h2>

| Command | What it does |
| --- | --- |
| `openclaw models list` | List available models. |
| `openclaw models status` | Show model status. |
| `openclaw models set openai/gpt-4o-mini` | Set the default model. |
| `openclaw models set-image openai/gpt-4o-mini` | Set the default image model. |
| `openclaw models aliases list` | List model aliases. |
| `openclaw models aliases add --name fast --model openai/gpt-4o-mini` | Add an alias. |
| `openclaw models aliases remove --name fast` | Remove an alias. |
| `openclaw models fallbacks list` | List fallback models. |
| `openclaw models fallbacks add --model openai/gpt-4o-mini --fallback openai/gpt-4o` | Add a fallback. |
| `openclaw models fallbacks remove --model openai/gpt-4o-mini --fallback openai/gpt-4o` | Remove a fallback. |
| `openclaw models scan` | Scan for available models. |

<h2 id="tools">Tools & Automation</h2>

| Command | What it does |
| --- | --- |
| `openclaw browser --browser-profile chrome tabs` | List tabs for a browser profile. |
| `openclaw browser snapshot --format aria` | Capture a page snapshot in ARIA format. |
| `openclaw browser open https://docs.openclaw.ai` | Open a URL in the browser. |
| `openclaw browser click <ref>` | Click a referenced element. |
| `openclaw browser type <ref> "hello"` | Type into a referenced element. |
| `openclaw browser screenshot` | Capture a screenshot. |
| `openclaw browser create-profile --name work --color "#FF5A36"` | Create a browser profile. |
| `openclaw browser delete-profile --name work` | Delete a browser profile. |
| `openclaw cron edit <job-id> --announce --channel telegram --to "123456789"` | Edit a scheduled job with announcement. |
| `openclaw cron edit <job-id> --no-deliver` | Edit a job without auto delivery. |

<h2 id="extensions">Plugins, Skills, Approvals</h2>

| Command | What it does |
| --- | --- |
| `openclaw plugins list` | List installed plugins. |
| `openclaw plugins install @openclaw/voice-call` | Install an official plugin. |
| `openclaw plugins install -l ./my-plugin` | Install a plugin from local path. |
| `openclaw plugins enable <id>` | Enable a plugin. |
| `openclaw plugins disable <id>` | Disable a plugin. |
| `openclaw plugins doctor` | Diagnose plugin issues. |
| `openclaw plugins update --all` | Update all plugins. |
| `openclaw skills list` | List skills. |
| `openclaw skills list --eligible` | List installable skills. |
| `openclaw skills info <name>` | Show skill info. |
| `openclaw skills check <name>` | Validate a skill. |
| `openclaw approvals get` | Get approvals config. |
| `openclaw approvals get --gateway` | Get gateway approvals config. |
| `openclaw approvals set --file ./exec-approvals.json` | Set approvals from file. |
| `openclaw approvals allowlist add "/usr/bin/uptime" --agent main` | Add allowlist rule. |
| `openclaw approvals allowlist remove "/usr/bin/uptime" --agent main` | Remove allowlist rule. |

<h2 id="system">System & Maintenance</h2>

| Command | What it does |
| --- | --- |
| `openclaw sandbox explain` | Explain sandbox behavior. |
| `openclaw sandbox list` | List sandboxes. |
| `openclaw sandbox list --json` | Output sandboxes as JSON. |
| `openclaw sandbox recreate --all` | Recreate all sandboxes. |
| `openclaw sandbox recreate --agent ops` | Recreate sandboxes for a specific agent. |
| `openclaw docs <query>` | Search docs. |
| `openclaw update` | Update CLI/components. |
| `openclaw update status` | Check update status. |
| `openclaw update wizard` | Open the update wizard. |
| `openclaw update --channel beta` | Switch update channel. |
| `openclaw reset` | Reset configuration or cache. |
| `openclaw uninstall` | Uninstall OpenClaw. |
| `openclaw uninstall --all --yes` | Uninstall everything without prompts. |
| `openclaw uninstall --dry-run` | Preview uninstall scope. |

> For more flags, run `openclaw <command> --help`.
