import { app } from "../..";
import { CrossyCatScrollerBackground } from "../CrossyCatScrollerBackground";
import { Hero } from "../Hero";
import { Scene } from "../Scene";
import { CrossyCatScenes } from "./CrossyCatScenes";

export class Menu extends Scene {
    private scrollerBG: CrossyCatScrollerBackground;
    private hero: Hero;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init("bg2");
        this.addChild(this.scrollerBG);

        const paneRight = new PIXI.Sprite(app.getTexture("test123"));
        paneRight.anchor.set(1, 1);
        paneRight.position.x = 320;
        paneRight.position.y = 480;
        this.addChild(paneRight);

        const bigBlackLine = new PIXI.Graphics();
        bigBlackLine.beginFill();
        bigBlackLine.drawRect(0, 0, 320, 100);
        bigBlackLine.endFill();
        bigBlackLine.position.y = 95;
        this.addChild(bigBlackLine);

        const graySmallLine = new PIXI.Graphics();
        graySmallLine.beginFill(0x646865);
        graySmallLine.drawRect(0, 0, 320, 10);
        graySmallLine.endFill();
        graySmallLine.position.y = 97;
        this.addChild(graySmallLine);

        this.hero = new Hero();
        this.hero.init();
        this.hero.position.x = 320 / 2;
        this.hero.position.y = 96;
        this.addChild(this.hero);

        const playBtn = new PIXI.Sprite(app.getTexture("playBtn2"));
        playBtn.position.x = 320 / 2;
        playBtn.position.y = 344;
        playBtn.anchor.set(0.5, 0.5);
        playBtn.interactive = true;
        playBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.GAME);
        });
        this.addChild(playBtn);

        const hatBtn = new PIXI.Sprite(app.getTexture("hatBtn"));
        hatBtn.position.x = 320 / 4;
        hatBtn.position.y = 212;
        hatBtn.anchor.set(0.5, 0);
        hatBtn.interactive = true;
        hatBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.HATS);
        });
        this.addChild(hatBtn);

        const flaskBtn = new PIXI.Sprite(app.getTexture("flaskBtn"));
        flaskBtn.position.x = 320 / 2;
        flaskBtn.position.y = 212;
        flaskBtn.anchor.set(0.5, 0);
        flaskBtn.interactive = true;
        flaskBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.FLASK);
        });
        this.addChild(flaskBtn);

        const catBtn = new PIXI.Sprite(app.getTexture("catBtn"));
        catBtn.position.x = 240;
        catBtn.position.y = 212;
        catBtn.anchor.set(0.5, 0);
        catBtn.interactive = true;
        catBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.SKINS);
        });
        this.addChild(catBtn);

        const creditBtn = new PIXI.Sprite(app.getTexture("creditBtn"));
        creditBtn.position.x = hatBtn.position.x;
        creditBtn.position.y = 311;
        creditBtn.anchor.set(0.5, 0);
        creditBtn.interactive = true;
        creditBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.CREDITS);
        });
        this.addChild(creditBtn);
    }
    public update(delta: number) {
        if (this.scrollerBG) {
            this.scrollerBG.update(delta);
        }
    }
    public runScene(oldScene: Scene) {
        console.log("Menu2 show");
    }
}
