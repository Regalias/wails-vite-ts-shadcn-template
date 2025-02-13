# README

Application description here.

## Contents

- App initialization load screen with readiness signalling
- Basic navigation template with top and sidebar
- File based routing
- Import aliases for wails generated bindings `@bindings` and runtime `@runtime`

## Components

- Wails (https://wails.io/)
- React 19, TypeScript 5.x, Vite 6.x
- eslint rules with prettier
- Tailwind 4 for styling (https://tailwindcss.com/)
- shadcn for UI components  (https://ui.shadcn.com/)
- TanStack Router for routing (https://tanstack.com/router/latest)

## Wails

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: https://wails.io/docs/reference/project-config

### Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

### Building

To build a redistributable, production mode package, use `wails build`.
