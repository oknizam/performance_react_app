    <!-- project setup -->

   # npm init -y

    Installing Core Dependencies


   # npm install --save react react-dom

    typescript

   # npm install --save-dev typescript


    tyepscript configuration check in tsconfig.ts file 



    Webpack Configuration

  # npm install --save-dev webpack webpack-cli webpack-dev-server


  webpack config check in webpack.config.js


  Babel Setup

  # npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript

    .babelrc check file


  Intergrate babel with webpack check webpack.config.js file 


  Add html template index.html check index.html file for code 


  install html webpack plugin

 # npm install --save-dev html-webpack-plugin


 upadate webpack.config.js check file 

# Why use html-webpack-plugin?
  The html-webpack-plugin generates an HTML file, injects the bundled JavaScript, and writes this file to the dist directory. This automates creating HTML files to serve your Webpack bundles, which is particularly useful for getting all your JavaScript files and linking them to your HTML.


  add types for react 

  npm i @types/react@latest --save-dev

  npm i --save-dev @types/react-dom  


 # add folowing scripts in pacakge.json


    "start": "webpack serve --open",
    "build": "webpack --mode production"



 Why did you use the script “build”: “webpack — mode production”?
The "build": "webpack --mode production" script is aimed to prepare your app for deployment. When Webpack runs in production mode, it performs additional optimisations to your code, like minification and dead code elimination, thus making the code more efficient and the bundle size smaller. Using --mode production tells Webpack to use its built-in optimisations for production.












 










