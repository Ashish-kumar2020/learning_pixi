import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  backgroundColor: 0x0000ff,
  resizeTo: window,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();

// const graphics = new PIXI.Graphics();
// graphics.beginFill(0xffffff); //Always Use numeric color value
// graphics.drawRect(window.innerWidth / 2, 0, 400, 400);
// graphics.endFill();

// container.addChild(graphics);
app.stage.addChild(container);

// create a texture
const texture = PIXI.Texture.from("https://pixijs.com/assets/bunny.png");
// Sprite - it is a 2D image
for (let i = 0; i < 25; i++) {
  const bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = (i % 5) * 40;
  bunny.y = Math.floor(i / 5) * 40;
  container.addChild(bunny);
}

//move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

//center sprite to the center
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// rotate the sprite
app.ticker.add((delta) => {
  container.rotation -= 0.01 * delta;
});
