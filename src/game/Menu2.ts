import { app } from "..";
import { CrossyCatStates } from "./CrossyCatStates";
import { State } from "./State";

export class Menu2 extends State {
    public init() {
        const bg1 = new PIXI.Sprite(app.getTexture("bg"));
        this.addChild(bg1);

        const paneRight = new PIXI.Sprite(app.getTexture("panel3"));
        paneRight.anchor.set(1, 1);
        paneRight.position.x = 320;
        paneRight.position.y = 480;
        this.addChild(paneRight);

        this.interactive = true;
        this.on("pointerdown", () => {
            this.manager.setCurrentState(CrossyCatStates.MENU);
        });
    }
    public runState(oldState: State) {
        console.log("Menu2 show");
    }
}
