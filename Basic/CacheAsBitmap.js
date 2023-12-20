import * as PIXI from "pixi.js";

const app = new PIXI.Application({ resizeTo: window });

document.body.appendChild(app.view);
app.stop();

PIXI.Assets.load("https://pixijs.com/assets/spritesheet/monsters.json").then(
  onAssetsLoaded
);

const aliens = [];
const alienFrames = [
  "eggHead.png",
  "flowerTop.png",
  "helmlok.png",
  "skully.png",
];

let count = 0;
const alienContainer = new PIXI.Container();
alienContainer.x = 400;
alienContainer.y = 200;
app.stage.eventMode = "static";
app.stage.addChild(alienContainer);

function onAssetsLoaded() {
  for (let i = 0; i < 100; i++) {
    const frameName = alienFrames[i % 4];
    const alien = PIXI.Sprite.from(frameName);
    alien.tint = Math.random() * 0xffffff;
    alien.x = Math.random() * 800 - 400;
    alien.y = Math.random() * 600 - 300;
    alien.anchor.x = 0.5;
    alien.anchor.y = 0.5;
    aliens.push(alien);
    alienContainer.addChild(alien);
  }
  app.start();
}

app.stage.on("pointertap", onClick);
function onClick() {
  alienContainer.cacheAsBitmap = !alienContainer.cacheAsBitmap;
}
app.ticker.add(() => {
  // let's rotate the aliens a little bit
  for (let i = 0; i < 100; i++) {
    const alien = aliens[i];

    alien.rotation += 0.1;
  }

  count += 0.01;

  alienContainer.scale.x = Math.sin(count);
  alienContainer.scale.y = Math.sin(count);
  alienContainer.rotation += 0.01;
});
