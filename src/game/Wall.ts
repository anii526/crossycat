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
        this.addChild(this.skin);

        this.box = new PIXI.Graphics();
        this.box.beginFill();
        this.box.drawRect(0, 0, 28, 32);
        this.box.endFill();
        this.box.position.x = -16;
        this.box.position.y = -8;
        // this.addChild(this.box);

        this.active = true;
    }
    public delete() {
        this.active = false;
        this.skin.visible = false;
    }
}
