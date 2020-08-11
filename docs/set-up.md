# Set up

Follow the instructions below to install, build, and run the
Project LEFTLIFE locally in less than 5 minutes.

## Install the LEFTLIFE and dependencies

1. [Fork repository](https://github.com/Donnerstagnacht/leftlife/fork) and clone it locally
1. Setup Environment
   * Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
   * Install Angular CLI and Typescript `npm i -g @angular/cli typescript`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Install a code editor such as [VSCode](https://code.visualstudio.com/)

## Build and serve

1. Run locally
   * `cd` into the base directory
   * `npm install` or `yarn`
   * `ng serve --open`, `npm start` or `yarn start`
1. Deploy
   * `npm run deploy` or `yarn deploy`

*NOTE:* By default Google Chrome supports the majority of features inside this project, be sure to custom `polyfills.ts` if you're using `Microsoft Edge` or other browser that not supports the new web features.
