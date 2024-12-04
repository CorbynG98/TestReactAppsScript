# Notes
This repository was setup to do some testing for Google Apps Script
- We tested the capabilities of Clasp
- Clasp in pipelines
- Deploying web apps
- Deploying simple react web apps
- Deploying complex router based react web apps
- Single file react builds with parcel
<br />
<br />
<br />

# Key Take Aways
- react-router higher than v6 does NOT WORK. I had to downgrade to latest v6 to get routing working
- The code can be a full react application as far as I am aware, so long as the resulting build is a single html file. If you view the html file here, you will see what I did to make sure parcel builds into it correctly
- Having a pipeline run with Clasp was a little touchy, as I would create the .clasprc.json file (credentials) but it was failing to find them. This seems to come down to how the runner determine their home directory. In Ubuntu, .clasprc.json should be in the ~ dir.
- Having a build helper script is a good call. This can delete any dist folder if there is one, and copy in some external files that are necessary for appsscript. In my case, it copies the contents from the apps-script dir
    - This had one issue, where because I was copying the main.ts file from apps-script, there were 'duplicate function names'. For this reason, I just added a ts-ignore for that rule.
- All code can be written with typescript. When using parcel to push up to Apps Script, it will be compiled into a .gs script automatically.
- We can call all functions in the main.gs file in Apps Script by using google.script.run. Wrapping this in a promise can make development simplier too, and even going as far having dynamic functionNames and params. On that, params can be passed into these functions too. See src/pages/HomePage.tsx
- google.script.run is obviously invalid on the typescript side, so that needs to be ts-ignored too so errors are not shouted all the time. It is also not testable in the app, so the function either needs to be temporarily updated to return specific values, or a mock needs to be created to override it in development mode.
<br />
<br />
<br />

# Build and Run
## Running Locally
- From the root directory, simply do a `npm run start` and that will start the application with parcel in watch mode.
<br />

## Building (ONLY REACT)
- From the root directory, run `npm run build` and that will generate a single index.html file in the dist folder
<br />

## Pre Deploy
- From the root directory, run `./pre-deploy.sh`. This will delete dist, build the application, and move the files in apps-script to the dist folder

## Deploy
- From the root directory, run `npm run deploy`. This will run the pre-deploy.sh script, then automatically run `clasp push -f`. The -f flag is so an overwrites don't hold the input up (important for pipelines).
    - For the deploy script to work, you need to be authenticated with Clasp. Do this with `npm run glogin` or if you have clasp installed globally, just do `clasp login`.
    - There is a setting that needs to be set in Apps Script for this to work. Google the Clasp docs to see it.
