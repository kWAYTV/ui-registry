<a href="https://aris.sh/">
  <h1 align="center">@aris-sh/registry</h1>
</a>

<p align="center">
    aris.sh registry is the official UI registry for aris.sh, built with Next.js and shadcn/ui. It powers component distribution, theming tokens, and v0 integration across projects.
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## About

The aris.sh registry centralizes brand tokens, base primitives, and higher-level components/blocks. It exposes machine-readable registry endpoints under `/r/*.json` that integrate with tools like v0 and MCP, enabling teams to scaffold apps and keep UI consistent.

## Open in v0

[![Open in v0](https://aris.sh/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Dashboard+Kit&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Faris.sh%2Fr%2Fdashboard.json)

This registry exposes `Open in v0` buttons for each item. The button opens [`v0.dev`](https://v0.dev) with a pre-populated prompt and a URL back to this registry’s `/r/${component_name}.json` endpoint. That endpoint provides v0 the files, content, and metadata to start a v0 chat with your component/theme and related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Theming

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`tokens.css`](./src/app/tokens.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

#### MCP

To use this registry with MCP, you must also edit [`registry.json`](./registry.json)'s first
`registry-item` named `registry`. This `registry:style` item also contains your design tokens that can be used with MCP.

For example, it looks like this:

```json
    {
      "name": "registry",
      "type": "registry:style",
      "cssVars": {
        "light": {
          "primary": "oklch(0.52 0.13 144.17)",
          "primary-foreground": "oklch(1.0 0 0)",
          "radius": "0.5rem",
          ...
        },
        "dark": {
          "primary": "oklch(0.52 0.13 144.17)",
          "primary-foreground": "oklch(1.0 0 0)",
          ...
        }
      },
      "files": []
    }
```

## Running locally

```bash
bun install
bun dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(design)` routes contains the registry pages.

`app/starters` routes contains various starters (using either `minimal` and `shell` layouts)

`@/components` contains all compound components used in the registry

`@/components/ui` contains all base `shadcn/ui` used in the registry

`@/components/design` contains all components for this application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils
