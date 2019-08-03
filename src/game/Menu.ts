import { app } from "..";
import { CrossyCatScrollerBackground } from "./CrossyCatScrollerBackground";
import { CrossyCatStates } from "./CrossyCatStates";
import { State } from "./State";

export class Menu extends State {
    private scrollerBG: CrossyCatScrollerBackground;
    private water: PIXI.Sprite;
    private waterAnimTime: number;
    private speedAnimTime: number;
    public init() {
        this.scrollerBG = new CrossyCatScrollerBackground();
        this.scrollerBG.init();
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

        this.waterAnimTime = 0;
        this.speedAnimTime = 0.03;

        this.interactive = true;
        this.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU2);
        });
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
    public runState(oldState: State) {
        console.log("Menu show");
    }
}
