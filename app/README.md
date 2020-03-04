# app

In order to make our lives easier, the below tools are used:

- ESLint: A linter to make sure we follow best practices when writing TypeScript. If using Visual Studio Code, [install the editor extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- Prettier: Automatic code formatter to ensure all our code follows the same styleguide. [Install the editor extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for Visual Studio Code to be able to automatically format on save.
- husky/lint-staged: These two will run some checks when you attempt to make a new commit. This makes sure that, when you commit, your TypeScript compiles, your staged files are free from lint errors, and automatically runs Prettier on your staged files.

You don't need to configure anything to get these to work, except installing the editor extensions for your own convenience.
