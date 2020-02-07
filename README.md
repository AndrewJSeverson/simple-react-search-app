# Simple React Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note that create-react-app comes with many utilities and packages through the 'react-scripts' package including webpack, babel, and many others. I chose to keep this package for simplicity but production builds might eject and only include packages being used by the application. Webpack should tree shake and remove any and all unused dependencies, so your production build won't have dead weight if kept.

This project uses the [TVMAZE API](http://www.tvmaze.com/api) to search on and return tv shows. The specific API used does not have pagination and will return a max 10 results based on the relevancy of the search term to the shows.

## Access Live Version

A working version of the app is deployed into AWS using S3 and CloudFront
[http://simple-react-search-app.s3-website-us-east-1.amazonaws.com](http://simple-react-search-app.s3-website-us-east-1.amazonaws.com)
[http://dfock12pvuxfe.cloudfront.net](http://dfock12pvuxfe.cloudfront.net)

## Installing

```bash
git clone 'https://github.com/AndrewJSeverson/simple-react-search-app.git'
cd simple-react-search-app
npm install
```

## Running The App

```bash
npm start
```

## Linting
```bash
npm run lint
```

## Testing
```bash
npm run test
npm run test:coverage
```

## Available Scripts - through create-react-app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

