# aurelia-datagrid-examples
This is a simple app to show a few examples and usages of the aurelia-datagrid plugin for Aurelia.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in four module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The App

To run the app, follow these steps.

1.  Build the code. You can follow the steps above.
2.  Run ```gulp watch```.
3.  Navigate to __http://localhost:9000__ in your browser (Chrome, Edge, or IE).
