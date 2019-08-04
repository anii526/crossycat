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
    private popupMenu: PIXI.Sprite;
    private currentState: string;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init("bg");
        this.addChild(this.scrollerBG);

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

        this.popupMenu = new PIXI.Sprite();
        this.addChild(this.popupMenu);

        const title = new PIXI.Sprite(app.getTexture("title"));
        title.anchor.set(0.5, 0.5);
        title.position.x = 320 / 2;
        title.position.y = 120;
        this.popupMenu.addChild(title);

        const playBtn = new PIXI.Sprite(app.getTexture("playBtn"));
        playBtn.position.x = 320 / 2;
        playBtn.position.y = 280;
        playBtn.anchor.set(0.5, 0.5);
        playBtn.interactive = true;
        playBtn.on("pointerdown", () => {
            // this.manager.setCurrentScene(CrossyCatScenes.MENU);
            // this.closeMenu();
            // this.changeState("game");
            console.log("pointerdown");
            playBtn.position.x += 3;
        });
        playBtn.on("pointerup", () => {
            // this.manager.setCurrentScene(CrossyCatScenes.MENU);
            this.closeMenu();
            this.changeState("game");
            playBtn.position.x -= 3;
            console.log("pointerup");
        });
        playBtn.on("pointerupoutside", () => {
            // this.manager.setCurrentScene(CrossyCatScenes.MENU);
            this.closeMenu();
            this.changeState("game");
            playBtn.position.x -= 3;
            console.log("pointerup");
        });
        this.popupMenu.addChild(playBtn);

        const settingsBtn = new PIXI.Sprite(app.getTexture("settingsBtn"));
        settingsBtn.position.x = 320 / 2;
        settingsBtn.position.y = 330;
        settingsBtn.anchor.set(0.5, 0.5);
        settingsBtn.interactive = true;
        settingsBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.popupMenu.addChild(settingsBtn);

        this.waterAnimTime = 0;
        this.speedAnimTime = 0.03;

        this.changeState("menu");
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
    public changeState(name: string) {
        switch (name) {
            case "menu":
                this.showMenu();
                break;
            case "game":
                this.showGame();
                break;
            case "lose":
                this.showLose();
                break;
        }
        this.currentState = name;
        console.log(this.currentState);
    }
    private showMenu() {
        console.log("openMenu");
    }
    private closeMenu() {
        console.log("closeMenu");
        this.popupMenu.alpha = 0;
    }
    private showGame() {
        console.log("showGame");
        setTimeout(() => {
            this.changeState("lose");
        }, 1000);
    }
    private showLose() {
        console.log("showLose");
        this.removeChild(this.hero);
        // this.changeState("lose");
        const playBtn = new PIXI.Sprite(app.getTexture("playBtn"));
        playBtn.position.x = 320 / 2;
        playBtn.position.y = 340;
        playBtn.anchor.set(0.5, 0.5);
        playBtn.interactive = true;
        playBtn.on("pointerup", () => {
            // this.manager.setCurrentScene(CrossyCatScenes.MENU);
            this.closeMenu();
            this.changeState("menu");
        });
        this.addChild(playBtn);

        const settingsBtn = new PIXI.Sprite(app.getTexture("settingsBtn"));
        settingsBtn.position.x = 320 / 2;
        settingsBtn.position.y = 390;
        settingsBtn.anchor.set(0.5, 0.5);
        settingsBtn.interactive = true;
        settingsBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.MENU);
        });
        this.addChild(settingsBtn);

        const hatBtn = new PIXI.Sprite(app.getTexture("hatBtn"));
        hatBtn.position.x = 320 / 4;
        hatBtn.position.y = 322;
        hatBtn.anchor.set(0.5, 0);
        hatBtn.interactive = true;
        hatBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.DROPPING_OUT_HATS);
        });
        this.addChild(hatBtn);

        const catBtn = new PIXI.Sprite(app.getTexture("catBtn"));
        catBtn.position.x = 240;
        catBtn.position.y = 322;
        catBtn.anchor.set(0.5, 0);
        catBtn.interactive = true;
        catBtn.on("pointerup", () => {
            this.manager.setCurrentScene(CrossyCatScenes.DROPPING_OUT_SKINS);
        });
        this.addChild(catBtn);

        const bigBlackLine = new PIXI.Graphics();
        bigBlackLine.beginFill();
        bigBlackLine.drawRect(0, 0, 320, 30);
        bigBlackLine.endFill();
        bigBlackLine.position.y = 278;
        this.addChild(bigBlackLine);

        const fish = new PIXI.Sprite(app.getTexture("fish2.png"));
        fish.position.x = 320 / 2 + 25;
        fish.position.y = bigBlackLine.position.y + 15;
        fish.anchor.set(0.5, 0.5);
        fish.rotation = 1.57081;
        this.addChild(fish);
    }
}
