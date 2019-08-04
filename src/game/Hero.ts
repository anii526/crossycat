import { app } from "..";

export class Hero extends PIXI.Sprite {
    public skinHero: PIXI.AnimatedSprite;
    public skinHat: PIXI.Sprite;
    constructor() {
        super();
    }
    public init() {
        this.skinHero = new PIXI.AnimatedSprite(
            app.getTexturesForName("image_part_00", 4)
        );
        this.skinHero.anchor.set(0.5, 1);
        this.skinHero.animationSpeed = 16 / 60;
        this.skinHero.play();
        this.addChild(this.skinHero);

        this.skinHat = new PIXI.Sprite(app.getTexture("hat1"));
        this.skinHat.position.x = 11;
        this.skinHat.anchor.set(0.5, 1);
        this.addChild(this.skinHat);
    }
}
