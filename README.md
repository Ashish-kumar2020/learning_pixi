# learning_pixi

Diving Deep into core of pixi

## Steps to setup Pixi

### Open your terminal and create a new directory for pixijs project

     mkdir my-pixi-project
     cd my-pixi-project

## Initialize your Project

npm init

## Install pixijs

    npm install pixi.js

## Create a html file ex(index.html)

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PixiJS Example</title>
    </head>
    <body>
        <script src="dist/bundle.js"></script>
    </body>
    </html>

## Create js file eg(index.js)

import \* as PIXI from 'pixi.js';

// Your PixiJS code goes here

// Create a PixiJS application
const app = new PIXI.Application({ width: 800, height: 600 });

// Add the app view to the DOM
document.body.appendChild(app.view);

// Create a red square
const square = new PIXI.Graphics();
square.beginFill(0xFF0000);
square.drawRect(0, 0, 100, 100);
square.endFill();

// Add the square to the stage
app.stage.addChild(square);

## Now we need a bundler to bundle our code for this i am using webpack

    npm install -g webpack webpack-cli

## create a webpack file (webpack.config.js)

const path = require('path');

module.exports = {
entry: './index.js',
output: {
filename: 'bundle.js',
path: path.resolve(\_\_dirname, 'dist'),
},
};

## Now the run command to bundle your code

    webpack

## Pixi is 2D rendering engine
