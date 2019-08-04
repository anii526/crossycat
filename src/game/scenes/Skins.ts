import { app } from "../..";
import { CrossyCatScrollerBackground } from "../CrossyCatScrollerBackground";
import { Scene } from "../Scene";
import { CrossyCatScenes } from "./CrossyCatScenes";

export class Skins extends Scene {
    private scrollerBG: CrossyCatScrollerBackground;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init("bg2");
        this.addChild(this.scrollerBG);

        const paneRight = new PIXI.Sprite(app.getTexture("test123"));
        paneRight.anchor.set(1, 1);
        paneRight.position.x = 320;
        paneRight.position.y = 480;
        this.addChild(paneRight);

        const backBtn = new PIXI.Sprite(app.getTexture("backBtn"));
        backBtn.position.x = 320 / 2;
        backBtn.position.y = 383;
        backBtn.anchor.set(0.5, 0);
        backBtn.interactive = true;
        backBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(backBtn);

        const titleTxt = new PIXI.Text("Skins");
        titleTxt.style.fontSize = 25;
        titleTxt.anchor.set(0.5, 0);
        titleTxt.position.x = 320 / 2;
        titleTxt.position.y = 100;
        this.addChild(titleTxt);
    }
    public update(delta: number) {
        if (this.scrollerBG) {
            this.scrollerBG.update(delta);
        }
    }
    public runScene(oldScene: Scene) {
        console.log("Skins show");
    }
}
