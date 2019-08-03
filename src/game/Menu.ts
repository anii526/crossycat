import { app } from "..";
import { CrossyCatStates } from "./CrossyCatStates";
import { State } from "./State";

export class Menu extends State {
    public init() {
        const bg1 = new PIXI.Sprite(app.getTexture("bg"));
        this.addChild(bg1);

        const panelLeft = new PIXI.Sprite(app.getTexture("panel3"));
        panelLeft.anchor.set(0, 1);
        panelLeft.position.y = 480;
        this.addChild(panelLeft);

        this.interactive = true;
        this.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU2);
        });
    }
    public runState(oldState: State) {
        console.log("Menu show");
    }
}
