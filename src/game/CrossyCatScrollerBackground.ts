import { app } from "..";
import { ScrollerBackground } from "./ScrollerBackground";

export class CrossyCatScrollerBackground extends ScrollerBackground {
    public init() {
        super.init();
        const bg1 = new PIXI.Sprite(app.getTexture("bg"));
        this.addChild(bg1);
        const bg2 = new PIXI.Sprite(app.getTexture("bg"));
        bg2.position.x = 320;
        this.addChild(bg2);
        this.bgs.push(bg1);
        this.bgs.push(bg2);
    }
}
