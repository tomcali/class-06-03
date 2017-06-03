module.exports = {

  // This is the entry point or start of our react applicaton
  // file to be transpiled
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  // output single file that will exist under public folder
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // anything that ends in .jsx inside the app folder
        // will be included in the test
        // entire app will be in a folder called app for React
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/, // entire app will be in one JavaScript file
        loader: "babel-loader",  // transpiler to be used
        exclude: /node_modules/,
        query: {
          // These are the specific transformations we'll be using.
          // type of transpiling to be carried out
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
