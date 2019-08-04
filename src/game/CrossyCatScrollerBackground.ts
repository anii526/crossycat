import { app } from "..";
import { ScrollerBackground } from "./ScrollerBackground";

export class CrossyCatScrollerBackground extends ScrollerBackground {
    public init(name: string) {
        super.init(name);
        const bg1 = new PIXI.Sprite(app.getTexture(name));
        this.addChild(bg1);
        const bg2 = new PIXI.Sprite(app.getTexture(name));
        bg2.position.x = 320;
        this.addChild(bg2);
        this.bgs.push(bg1);
        this.bgs.push(bg2);
    }
}
