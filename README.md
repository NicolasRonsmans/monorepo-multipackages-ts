# Monorepo Multipackages - TypeScript

## Commands

### First

```
yarn
```

### Then

```
yarn start:cra
```

### Or

```
yarn compile
```

```
yarn compile:watch
```

```
yarn lint
```

```
yarn test
```

```
yarn build:cra
```

## Walkthrough

### Monorepo

This is entirely managed by Yarn Workspaces built-in functionalities.
There are 2 types of workspaces:

- `apps/*`: is hosting deployable web apps (CRA, Next.js, Gatsby, ...)
- `packages/*`: is hosting buildable, sharable and publishable packages (TypeScript -> es5)

### Git

To detect issues as soon as possible, 2 specific tools have been added:

- `husky` is hooking git actions to specific tasks (commit -> lint, push -> test)
- `lint-staged` is hooking specific tasks based on the files currently staged

### TypeScript

Both the packages and app(s) are using .ts/.tsx files but their output is generated differently.

- CRA: `react-scripts` is in charge of compiling the files
- packages: TypeScript built-in compiler is directly used to compile the file. It's being wrapped by TTypescript to be able to apply transformations, such as converting absolute imports into relative ones.

TypeScript references is used to compile all the packages at once. It's entrypoint is `packages/tsconfig.ref.json`.
Each package has 2 tsconfig files:

- `<MY-PACKAGE>/tsconfig.build.json`: this is used to generated the build (es5 + source map + types)
- `<MY-PACKAGE>/tsconfig.json`: this is used to lint/test and also for any editor supporting running a typescript server instance.
  Both file will respectively extend `packages/tsconfig.build.json` and `packages/tsconfig.json`.

### Linting

Different things happen during the linting process:

- `tsc` compliles without emitting an output
- `typescript-eslint` lints each package, using the local `tsconfig.json`, checking the source code and the test files
- `prettier-check` detects the files which are not following the prettier config

### Testing

No surprise here, `jest` and `testing-library` are used respectively as test runner and renderer (and extending the assertions).
`ts-jest` as been added as a plugin of Jest in order to support TypeScript.
