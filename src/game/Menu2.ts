import { app } from "..";
import { CrossyCatScrollerBackground } from "./CrossyCatScrollerBackground";
import { CrossyCatStates } from "./CrossyCatStates";
import { Hero } from "./Hero";
import { State } from "./State";

export class Menu2 extends State {
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
        playBtn.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU);
        });
        this.addChild(playBtn);

        const hatBtn = new PIXI.Sprite(app.getTexture("hatBtn"));
        hatBtn.position.x = 320 / 4;
        hatBtn.position.y = 212;
        hatBtn.anchor.set(0.5, 0);
        hatBtn.interactive = true;
        hatBtn.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU);
        });
        this.addChild(hatBtn);

        const flaskBtn = new PIXI.Sprite(app.getTexture("flaskBtn"));
        flaskBtn.position.x = 320 / 2;
        flaskBtn.position.y = 212;
        flaskBtn.anchor.set(0.5, 0);
        flaskBtn.interactive = true;
        flaskBtn.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU);
        });
        this.addChild(flaskBtn);

        const catBtn = new PIXI.Sprite(app.getTexture("catBtn"));
        catBtn.position.x = 240;
        catBtn.position.y = 212;
        catBtn.anchor.set(0.5, 0);
        catBtn.interactive = true;
        catBtn.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU);
        });
        this.addChild(catBtn);

        const creditBtn = new PIXI.Sprite(app.getTexture("creditBtn"));
        creditBtn.position.x = hatBtn.position.x;
        creditBtn.position.y = 311;
        creditBtn.anchor.set(0.5, 0);
        creditBtn.interactive = true;
        creditBtn.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.CREDITS);
        });
        this.addChild(creditBtn);
    }
    public update(delta: number) {
        if (this.scrollerBG) {
            this.scrollerBG.update(delta);
        }
    }
    public runState(oldState: State) {
        console.log("Menu2 show");
    }
}
