# Step by Step

--create-react-app
--tailwind installation
--Sign In & Sign In Form
--deploy to firebase
--authentication
--redux store.
--validations sign sign out
--navigation
--bug fix of unauthroised access by going on /browse.
--tmdb account sign up for API key.
--fetching data 


# Goal

--Netflix login page
--sign in/up form
-- redirect to browse page

--Netflix browse (after authentication)
--Header
--Main movie
--trailer in bg
--title and description
--Movie suggestion
--movie list \* N

--Netflix GPT
--search for
--movie suggestion

Notes:
When u have big forms in react use Formix.
--ref
whenever u use ref for some input box it gives the whole input box with its classes and all, and its a large object, so u can get the value by doing object.current.value

-deploying using firebase
--first go to firebase sign in and create a project,
--do web app settings and create authentication(optional )
--in project, install firebase
-- npm i firebase
--npm i -g firebase-tools
--firebase login
--firebase init (do some settings in it)
--firebase deploy


--navigating in same component as of router provider?
//we cant use navigate here because this is the parent component of routerprovider, and all pages are child of this component, so if u want to use navigate here you would have to shift router provider on app level, second it to usenormaal redirection without navigate and other ssolution is to use navigate from child components


--he is getting user name because he used update profile and there he gave current name;

--react strictmode often makes few multiple calls to check for the consistency of the calls. Its a good thing. 






<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
