import { app } from "../..";
import { CrossyCatScrollerBackground } from "../CrossyCatScrollerBackground";
import { Hero } from "../Hero";
import { Scene } from "../Scene";
import { CrossyCatScenes } from "./CrossyCatScenes";
// import { CrossyCatScenes } from "./CrossyCatScenes";

export class DroppingOutHats extends Scene {
    private scrollerBG: CrossyCatScrollerBackground;
    private hero: Hero;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init("bg");
        this.addChild(this.scrollerBG);

        const paneRight = new PIXI.Sprite(app.getTexture("test234"));
        paneRight.anchor.set(1, 1);
        paneRight.position.x = 320;
        paneRight.position.y = 480;
        this.addChild(paneRight);

        const bushes = new PIXI.Sprite(app.getTexture("bushes"));
        bushes.position.x = 14;
        bushes.position.y = 352;
        this.addChild(bushes);

        const tree = new PIXI.Sprite(app.getTexture("tree"));
        tree.position.x = -31;
        tree.position.y = 226;
        this.addChild(tree);

        this.hero = new Hero();
        this.hero.init();
        this.hero.position.x = 135;
        this.hero.position.y = 383;
        this.addChild(this.hero);

        const skinsMachine = new PIXI.Sprite(app.getTexture("hatsMachine"));
        skinsMachine.position.x = 15;
        skinsMachine.position.y = 20;
        this.addChild(skinsMachine);

        const titleTxt = new PIXI.Text("DroppingOutHats");
        titleTxt.style.fontSize = 25;
        titleTxt.anchor.set(0.5, 0);
        titleTxt.position.x = 320 / 2;
        titleTxt.position.y = 100;
        this.addChild(titleTxt);

        const bigRedBtn = new PIXI.Sprite(app.getTexture("bigRedBtn"));
        bigRedBtn.position.x = 233;
        bigRedBtn.position.y = 342;
        bigRedBtn.anchor.set(0.5, 0);
        bigRedBtn.interactive = true;
        bigRedBtn.on("pointerup", () => {
            bigRedBtn.texture = app.getTexture("activeBigRedBtn");
            // this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(bigRedBtn);

        const playBtn = new PIXI.Sprite(app.getTexture("playBtn2"));
        playBtn.position.x = 320 / 2;
        playBtn.position.y = 430;
        playBtn.anchor.set(0.5, 0.5);
        playBtn.interactive = true;
        playBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.GAME);
        });
        this.addChild(playBtn);

        const backBtn = new PIXI.Sprite(app.getTexture("backBtn"));
        backBtn.position.x = 320 / 4.6;
        backBtn.position.y = 430;
        backBtn.anchor.set(0.5, 0.5);
        backBtn.interactive = true;
        backBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(backBtn);
    }
    public update(delta: number) {
        if (this.scrollerBG) {
            this.scrollerBG.update(delta);
        }
    }
    public runScene(oldScene: Scene) {
        console.log("DroppingOutHats show");
    }
}
