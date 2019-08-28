import { app } from "..";

export class Wall extends PIXI.Sprite {
    public skin: PIXI.Sprite;
    public box: PIXI.Graphics;
    public active: boolean;
    constructor() {
        super();
    }
    public init() {
        this.skin = new PIXI.Sprite(app.getTexture("wall"));
        this.skin.anchor.set(0.5, 0.5);
        // this.addChild(this.skin);

        this.box = new PIXI.Graphics();
        this.box.beginFill();
        this.box.drawRect(0, 0, 28, 32);
        this.box.endFill();
        this.box.position.x = -16;
        this.box.position.y = -8;
        // this.addChild(this.box);

        this.active = true;

        const fish = new PIXI.AnimatedSprite(app.getTexturesForName("fish", 4));
        fish.anchor.set(0.5, 0.5);
        // fish.position.x = 160;
        // fish.position.y = 200;
        fish.animationSpeed = 16 / 60;
        fish.play();
        this.addChild(fish);

        app.pixi.app.ticker.add(delta => {
            fish.rotation += 0.1 * delta;
        });
    }
    public delete() {
        this.active = false;
        this.skin.visible = false;
    }
}
