# a Framework

This is an example of perhaps the most minimal Typescript + SSR React/Preact framework that runs in Deno and embraces import maps and [no build](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c).

It's obviously not production ready and handles approximately zero edge cases. But it's an example of a starting point for building simple full stack Typescript applications using modern web API's with minimal overhead.

It would be trivial to add Esbuild for production builds, but I'd encourage developers to use import maps and keep their dependency trees minimal. Perhaps even Preact is overkill. You could potentially swap it out for a simple serverside JSX renderer and use HTMX or Turbo for interactivity - or web components - or anything you'd like. The point is that you can achieve a lot with a tiny amount of code.