import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  backgroundAlpha: 0,
  resizeTo: window,
});

document.body.appendChild(app.view);

const bunny = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");
bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
app.stage.addChild(bunny);

app.ticker.add((delta) => {
  bunny.rotation += 0.2 * delta;
});
