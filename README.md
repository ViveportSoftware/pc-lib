# pc-lib

A types library for viverse-world, pc-ui-ext.

![NODE Version](https://img.shields.io/badge/node-v20.11.0-orange)
![PNPM Version](https://img.shields.io/badge/pnpm-v8.15.1-blue)

## Committing Code

For improved commit messages, use either:

```bash
pnpm commit
```

or

```bash
git commit -m "{type}: {description}"
# e.g.
# git commit -m "feat: add new feature"
# git commit -m "fix: fix a bug"
```

Follow the Conventional Commits guidelines at:
[https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

## Install in your project

```bash
# e.g.
# branch
pnpm add github:ViveportSoftware/pc-lib#master
# tag
pnpm add github:ViveportSoftware/pc-lib#v1.32.0
```

## Create create-sdk template

1.  Bundle ESM interfaces script with Rollup
2.  Convert bundle to a string and export as template.ts

### After modifying the create-sdk interface, run the command below:

```bash
pnpm generate-create-sdk
```

## Read create-sdk docs

1. Open the create-sdk documentation by navigating to the `docs` directory in your project.
2. Open the `index.html` file in your web browser to view the documentation.

update 1