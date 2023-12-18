import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  resizeTo: window,
});

document.body.appendChild(app.view);

let aliens = [];
const totalDudes = 20;
for (let i = 0; i < totalDudes; i++) {
  const dudes = PIXI.Sprite.from("https://pixijs.com/assets/eggHead.png");
  dudes.anchor.set(0.5);
  dudes.scale.set(0.8 + Math.random() * 0.3);
  dudes.x = Math.random() * app.screen.width;
  dudes.y = Math.random() * app.screen.height;
  dudes.tint = Math.random() * 0xffffff;
  dudes.direction = Math.random() * Math.PI * 2;
  dudes.turningSpeed = Math.random() - 0.8;
  dudes.speed = 2 + Math.random() * 2;
  aliens.push(dudes);
  app.stage.addChild(dudes);
}
const dudeBoundsPadding = 100;
const dudeBounds = new PIXI.Rectangle(
  -dudeBoundsPadding,
  -dudeBoundsPadding,
  app.screen.width + dudeBoundsPadding * 2,
  app.screen.height + dudeBoundsPadding * 2
);

app.ticker.add(() => {
  for (let i = 0; i < aliens.length; i++) {
    const dude = aliens[i];
    dude.direction += dude.turningSpeed * 0.01;
    dude.x += Math.sin(dude.direction) * dude.speed;
    dude.y += Math.cos(dude.direction) * dude.speed;
    dude.rotation = -dude.direction - Math.PI / 2;

    if (dude.x < dudeBounds.x) {
      dude.x += dudeBounds.width;
    } else if (dude.x > dudeBounds.x + dudeBounds.width) {
      dude.x -= dudeBounds.width;
    }

    if (dude.y < dudeBounds.y) {
      dude.y += dudeBounds.height;
    } else if (dude.y > dudeBounds.y + dudeBounds.height) {
      dude.y -= dudeBounds.height;
    }
  }
});
