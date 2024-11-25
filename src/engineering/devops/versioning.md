# Versioning

[Versioning](https://en.wikipedia.org/wiki/Software_versioning) is a way to name different versions of a software, allowing to keep track of the changes and updates over time.

A good naming convention is `MAJOR.MINOR.PATCH`.

- `MAJOR` versions have groundbreaking changes that often make it incompatible with previous version.
- `MINOR` versions add features that are backward compatible with previous versions.
- `PATCH` versions often include bug fixes, also backward compatible.

Some point to keep in mind:

- Major versions start at 0, usually in a development/beta/unstable phase (e.g. `0.y.z`)

## Commit

When we send last changes to the repository through a [commit](https://en.wikipedia.org/wiki/Commit_(version_control)), there is many way to write them. Here is a structural and standardised way to do it:

```
<type>(<optional scope>): <subject>
```

### Types

Here is typical example of types you can use to quickly target what the changes affect

- `build`: build system and external dependencies (e.g. npm, pip, …)
- `chore`: related to environment and maintenance
- `ci`: [CI/CD](ci-cd.md), configuration files and scripts, …
- `docs`: documentation related (e.g. README, …)
- `feat`: add new feature
- `fix`: resolve a bug
- `perf`: improve performance
- `refactor`: improve structure/clean up the codebase without changing the logic
- `release`: push new version of the product
- `revert`: switch back to change made in another commit
- `style`: cosmetic change (e.g. formatting, linting-related, …)
- `test`: add/improve test routines

### Examples

- `build: add webpack config for production`
- `chore(deps): update Node.js version in .nvmrc`
- `ci(tests): add GitHub Actions workflow for tests`
- `docs(api): update usage examples in README`
- `feat(auth): add user login functionality`
- `fix(auth): correct null pointer exception in middleware`
- `perf(db): optimize database query for faster response`
- `refactor(router): split monolithic file into smaller modules`
- `release: version 1.2.0`
- `revert: undo changes from commit abc123`
- `style(lint): fix indentation in main.js`
- `test(auth): add unit tests for login feature`

## Ressources

- [semver.org](https://semver.org/) – Article giving a good overview on semantic Versioning
- [conventionalcommits.org](https://www.conventionalcommits.org) – Guidelines to write