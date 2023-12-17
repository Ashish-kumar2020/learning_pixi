## Container

    Note: app.stage is the main container where all the sprites,graphics etc
    create a container using
    const container = new PIXI.Container();
    to add color to container we use graphic

    ## Note: For Container we can not directly give color we have to use graphics to give color

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xffffff); //Always Use numeric color value
        graphics.drawRect(window.innerWidth / 2, 0, 400, 400);
        graphics.endFill();

    ## Ticker

    In PIXI.js, the Ticker is a core component that drives the animation loop. It is responsible for repeatedly rendering the PIXI stage at a consistent frame rate, typically matching the refresh rate of the display. The Ticker is part of PIXI's rendering system and helps manage the game or application's animation and rendering processes
