## Container

create a container using
const container = new PIXI.Container();
to add color to container we use graphic

## Note: For Container we can not directly give color we have to use graphics to give color

     const graphics = new PIXI.Graphics();
     graphics.beginFill(0xffffff); //Always Use numeric color value
     graphics.drawRect(window.innerWidth / 2, 0, 400, 400);
     graphics.endFill();
