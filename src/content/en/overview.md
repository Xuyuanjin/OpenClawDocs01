<div class="hero">
  <div class="hero-card code-card side-card">
    <div class="card-title">Common Commands (Setup)</div>
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>What it does</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>openclaw onboard</code></td>
          <td>Run the CLI onboarding flow to configure gateway, channels, and workspace.</td>
        </tr>
        <tr>
          <td><code>openclaw configure</code></td>
          <td>Open the interactive configuration wizard.</td>
        </tr>
        <tr>
          <td><code>openclaw config get gateway.auth.token</code></td>
          <td>Read a specific config key (example: gateway token).</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="hero-card primary-card">
    <div class="eyebrow">OpenClaw CLI</div>
    <h1>OpenClaw Docs</h1>
    <p>A command-first workspace for automation and intelligent agents. Covers onboarding, gateway operations, channels, messages, models, and plugins.</p>
    <div class="hero-actions">
      <a class="btn primary" href="/en/quickstart">Quickstart</a>
      <a class="btn ghost" href="/en/commands">Command Index</a>
    </div>
    <div class="meta-row">
      <span class="pill">Glass UI</span>
      <span class="pill">Bilingual</span>
      <span class="pill">CLI First</span>
    </div>
  </div>
  <div class="hero-card code-card side-card">
    <div class="card-title">Common Commands (Ops)</div>
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>What it does</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>openclaw gateway status</code></td>
          <td>Check gateway status, with optional RPC probing.</td>
        </tr>
        <tr>
          <td><code>openclaw logs --follow</code></td>
          <td>Follow gateway logs in real time.</td>
        </tr>
        <tr>
          <td><code>openclaw status --all</code></td>
          <td>Show a more complete status summary for quick verification.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="card-grid">
  <a class="card" href="/en/quickstart">
    <div class="card-title">Quickstart</div>
    <div class="card-desc">Install, onboard, configure, and verify in minutes.</div>
    <div class="card-cta">Start now -&gt;</div>
  </a>
  <a class="card" href="/en/cli-reference">
    <div class="card-title">CLI Reference</div>
    <div class="card-desc">Global flags and the command tree overview.</div>
    <div class="card-cta">See structure -&gt;</div>
  </a>
  <a class="card" href="/en/commands">
    <div class="card-title">Command Index</div>
    <div class="card-desc">Grouped commands and explanations by scenario.</div>
    <div class="card-cta">Browse commands -&gt;</div>
  </a>
  <a class="card" href="/en/commands#gateway">
    <div class="card-title">Gateway Ops</div>
    <div class="card-desc">Run, probe, discover, and manage services.</div>
    <div class="card-cta">Jump to section -&gt;</div>
  </a>
</div>

## Project overview
OpenClaw is a CLI-first automation and agent workspace that emphasizes scriptability and observability. It helps teams assemble "tools + models + rules" into reusable workflows.

- **CLI first**: every capability is scriptable and pipeline-friendly.
- **Gateway entrypoint**: unified routing, auth, and service access.
- **Channels & messages**: one set of commands for multi-channel delivery.
- **Agents & sessions**: clear identity, state, and session tracking.
- **Observability**: status, health checks, logs, and diagnostics in one place.

## What you can do quickly
- Initialize a workspace and config
- Operate the gateway service
- Connect channels and send messages
- Manage models and fallbacks
- Install plugins and verify skills

## Page map
- **Quickstart**: shortest path to a working setup
- **CLI Reference**: command tree and flags
- **Command Index**: grouped high-frequency commands

> Tip: cards highlight on hover and link to the target section.
