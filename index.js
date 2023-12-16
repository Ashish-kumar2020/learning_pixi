import * as PIXI from "pixi.js";

// Your PixiJS code goes here

// Create a PixiJS application
const app = new PIXI.Application({ width: 800, height: 600 });

// Add the app view to the DOM
document.body.appendChild(app.view);

// Create a red square
const square = new PIXI.Graphics();
square.beginFill("#0000FF");
square.drawRect(0, 0, 100, 100);
square.endFill();

// Add the square to the stage
app.stage.addChild(square);
