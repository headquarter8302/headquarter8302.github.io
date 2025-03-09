# [headquarter8302.github.io](https://headquarter8302.github.io)

I forgot this existed.

Sub-sites:

- [/music](https://github.com/headquarter8302/music)
- [/blog](https://github.com/headquarter8302/blog)

## Development

This repository uses Bun as the package manager, script host, and runtime.

1. Install all dependencies:

```bash
bun install
```

1. Run dev environment:

```bash
bun run dev
```

### Building

1. Install all dependencies:

```bash
bun install
```

2. Run build script:

```bash
bun run build
```

The output of the build should be a static site inside the `dist/` directory

### Deployment

The repository's GitHub Actions workflow is configured to automatically build and deploy to GitHub Pages upon any pushes to `master` or `staging`

## Licensing

- *Content* (the material displayed/presented to the end user using the website, including text, design, any type of code presented in the site, and other media) in this repository are licensed under the Creative Commons Attribution Share-Alike 4.0 license
- *Code* (the underlying code and programming powering the site, including code for the layouts, design, and deployment mechanisms related to the serving and publishing of the website) in this repository are licensed under the MIT License

> *Why the dual licensing?*

I still want attribution for my creative work. However, I do not consider code to be something worthy of personal attribution (since all code is replicable anyways), plus it feels nice to share it.
