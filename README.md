# @scope/package-name

This is a boilerplate template for creating a npm package using TypeScript. It provides a solid foundation for building reusable TypeScript libraries (ESM) that can be easily published and consumed by others.

With this template, you can kickstart the development of a TypeScript npm package, focusing on the core functionality of your library while leveraging the benefits of TypeScript and the npm ecosystem.

This is the complementary repository for the YouTube video [A npm package template really explained](https://www.youtube.com/watch?v=gBLDBAiebks). For related material and more, visit our channel [@fromDev2Dev](https://www.youtube.com/@fromDev2Dev).

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/gBLDBAiebks/0.jpg)](https://www.youtube.com/watch?v=gBLDBAiebks)

## Features

- TypeScript: The template is preconfigured with TypeScript, enabling you to write type-safe code and take advantage of the rich ecosystem of TypeScript tooling.
- Bundler: The template uses [Tsup](https://tsup.egoist.dev/) for building. Tsup is powered by esbuild, which means it's really fast.
- Linting: The template incorporates a linter ([typescript-eslint](https://typescript-eslint.io/)) with predefined rules to enforce best practices.
- Code Formatting: The template includes [Prettier](https://prettier.io/), a code formatting tool, to automatically format your TypeScript code and ensure consistent formatting across the project.
- Git Hooks: The template includes two pre-configured git hooks using [Husky](https://typicode.github.io/husky/) to automate tasks. One for formatting, linting and testing before each commit (with [lint-staged](https://www.npmjs.com/package/lint-staged)). And another for checking coverage before each push.
- dotenv: The template includes [dotenv-cli](https://www.npmjs.com/package/dotenv-cli), which allows you to load environment variables from a `.env` file during development or deployment (see npm script `release`). This enables you to securely store sensitive data like API keys, database credentials, and configuration settings outside your codebase.
- Test Framework: The template is integrated with a fast test framework ([Vitest](https://vitest.dev/)) to facilitate unit testing of your package.
- Code Coverage: It includes a code coverage tool ([Vitest/C8](https://vitest.dev/guide/coverage.html)) to help you monitor and maintain a high level of test coverage.
- Documentation: The template provides a basic structure for documentation, including a README file where you can describe the package and provide instructions for installation, usage, and contribution. In the folder `.github`, there is a template for pull requests (PR). This template will be used automatically by GitHub whenever you are creating a PR for your package.
- npm Scripts: The template includes a set of npm scripts for common development tasks such as building, testing, linting, and releasing your package.
- CI/CD Configuration: The template can be easily integrated with popular CI/CD services (such as GitHub Actions or Travis CI) to automate the build, test, and release processes. It uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) to control versioning, publishing and releasing.
- License: It includes a license file where you can specify the license under which you want to release your package. You can see more about licenses [here](https://license.md/).

## Installation

1. Create a new repository from this template.
2. Install the dependencies by running `npm install`.
3. Open package.json and review the package's name, description, keywords, author's info, publish config's info, homepage's url, repository's info, and bug's url.
4. Create a `.env` file (see `.env.example`) and add your GITHUB_TOKEN and other environment-specific configuration settings, ensuring not to commit this file to version control (this template is already configured to ignore `.env` files).
5. Open LICENSE and complete the fields year and name.
6. Edit this README for the package's purpose.
7. Delete the demo source code and have fun.

## Usage

1. Read the commit message conventions outlined in [conventional commit spec](https://www.conventionalcommits.org/en/v1.0.0/).
2. Implement your package logic by writing TypeScript code in the provided source files.
3. Write unit tests to ensure the correctness of your code and maintain a high level of code coverage.
4. Use the npm scripts provided to build, test, and lint your package (in fact, the template uses a git hook to format, lint and test before each commit).
5. Update the README file to describe your package, its installation process, usage examples, and contribution guidelines.
6. Publish your package to npm by running `npm run release`. This will automatically identify a new package's version based on the commit messages, create a new git tag, publish to npm (according to the property publishConfig in `package.json`), push to the remote repository and create a new GitHub release with the changelog (it considers the property repository in `package.json`).

NOTE: This template uses [Verdaccio](https://verdaccio.org/) as a local npm proxy registry. You can configure CI/CD (e.g., GitHub actions) for your repository to automate the build, test, and release processes.
