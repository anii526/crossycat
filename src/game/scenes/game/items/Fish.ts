import { app } from "../../../..";
import { BaseItem } from "./BaseItem";

export class Fish extends BaseItem {
    public fish: PIXI.AnimatedSprite;
    public init() {
        super.init();

        // this.skin.texture = app.getTexture("fish");
        this.fish = new PIXI.AnimatedSprite(app.getTexturesForName("fish", 4));
        this.fish.anchor.set(0.5, 0.5);
        this.fish.animationSpeed = 16 / 60;
        this.fish.play();
        this.addChild(this.fish);

        app.pixi.app.ticker.add(delta => {
            this.fish.rotation += 0.1 * delta;
        });
    }
    public hit() {
        console.log("hit");
        this.fish.alpha = 0.5;
        this.isActive = false;
        return false;
    }
    public check() {
        console.log("check");
        this.isActive = true;
    }
}
