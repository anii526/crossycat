import { app } from "../..";
import { CrossyCatScrollerBackground } from "../CrossyCatScrollerBackground";
import { Hero } from "../Hero";
import { Scene } from "../Scene";
import { CrossyCatScenes } from "./CrossyCatScenes";

export class Game extends Scene {
    private scrollerBG: CrossyCatScrollerBackground;
    private water: PIXI.Sprite;
    private waterAnimTime: number;
    private speedAnimTime: number;
    private hero: Hero;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init("bg");
        this.addChild(this.scrollerBG);

        const title = new PIXI.Sprite(app.getTexture("title"));
        title.anchor.set(0.5, 0.5);
        title.position.x = 320 / 2;
        title.position.y = 120;
        this.addChild(title);

        const panelLeft3 = new PIXI.Sprite(app.getTexture("panel1"));
        panelLeft3.anchor.set(0, 1);
        panelLeft3.position.x = -13;
        panelLeft3.position.y = 480;
        this.addChild(panelLeft3);

        const panelLeft2 = new PIXI.Sprite(app.getTexture("panel1"));
        panelLeft2.position.x = -13;
        panelLeft2.position.y = 412;
        this.addChild(panelLeft2);

        const panelLeft1 = new PIXI.Sprite(app.getTexture("panel1"));
        panelLeft1.position.x = -13;
        panelLeft1.position.y = 381;
        this.addChild(panelLeft1);

        this.water = new PIXI.Sprite(app.getTexture("water"));
        this.water.position.x = 83;
        this.water.position.y = 408;
        this.addChild(this.water);

        const panelRight3 = new PIXI.Sprite(app.getTexture("panel1"));
        panelRight3.anchor.set(0, 1);
        panelRight3.position.x = 241;
        panelRight3.position.y = 480;
        this.addChild(panelRight3);

        const panelRight2 = new PIXI.Sprite(app.getTexture("panel1"));
        panelRight2.position.x = 241;
        panelRight2.position.y = 412;
        this.addChild(panelRight2);

        const panelRight1 = new PIXI.Sprite(app.getTexture("panel1"));
        panelRight1.position.x = 241;
        panelRight1.position.y = 381;
        this.addChild(panelRight1);

        const tree = new PIXI.Sprite(app.getTexture("tree"));
        tree.position.x = -31;
        tree.position.y = 228;
        this.addChild(tree);

        const bushes = new PIXI.Sprite(app.getTexture("bushes"));
        bushes.position.x = 289;
        bushes.position.y = 355;
        this.addChild(bushes);

        this.hero = new Hero();
        this.hero.init();
        this.hero.position.x = 45;
        this.hero.position.y = 385;
        this.addChild(this.hero);

        const playBtn = new PIXI.Sprite(app.getTexture("playBtn"));
        playBtn.position.x = 320 / 2;
        playBtn.position.y = 280;
        playBtn.anchor.set(0.5, 0.5);
        playBtn.interactive = true;
        playBtn.on("pointerdown", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(playBtn);

        const settingsBtn = new PIXI.Sprite(app.getTexture("settingsBtn"));
        settingsBtn.position.x = 320 / 2;
        settingsBtn.position.y = 330;
        settingsBtn.anchor.set(0.5, 0.5);
        settingsBtn.interactive = true;
        settingsBtn.on("pointerdown", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(settingsBtn);

        this.waterAnimTime = 0;
        this.speedAnimTime = 0.03;
    }
    public update(delta: number) {
        if (this.scrollerBG) {
            this.scrollerBG.update(delta);
        }

        if (this.water) {
            this.water.y = 408 + delta * (10 * Math.sin(this.waterAnimTime));
            this.waterAnimTime += this.speedAnimTime;
        }
    }
    public runScene(oldScene: Scene) {
        console.log("Menu show");
    }
}
