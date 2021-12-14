# ez-starter
This is my personal starter setup for React/Typescript projects. The guiding principle is: no junk.

The essentials, but nothing more. I find that most projects start to bloat with plugins and configurations. The ez-starter keeps things minimal.

Includes my prefered configuration for the following tools:
- prettier
- eslint
- typescript
- styled-components
- yarn
- vscode

## Lifestyle
What is the ez-starter lifestyle like? Simple. You don't waste time setting up the basics, but your coding isn't slowed by lack of tooling either. Starting a project without formatting or linting is a noob move, but so is starting a project with a rando `create-react-app` template with 60,000 things going on.

## No Configuration
Why would you ever want to spend time configuring a tool only to be left with a less than optimal configuration?

The ez-starter eliminates the need for configuration by using the right tool for the job.

The ez-starter comes with eslint and prettier configured out of the box. It also uses Typescript with the correct tsconfig.json file (don't even look at it). Prettier takes care of formatting. I've yet to run into a situation where I wanted to use a different formatter.

## Features
- format and lint on save
- autosort imports on save (with react at the top)
- no janky tests
- sensible vscode settings

## Forking ez-starter
If you want to fork ez-starter, go for it. However, if you abandon the ez-starter spirit, I will hunt you down and murder you.

Oh, and if you make changes, please open a pull request. More eyeballs = fewer bugs.

## cra boilerplate
### Available Scripts

- `yarn start`
- `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

