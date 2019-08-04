import { Credits } from "./Credits";
import { CrossyCatStates } from "./CrossyCatStates";
import { Flask } from "./Flask";
import { Hats } from "./Hats";
import { Menu } from "./Menu";
import { Menu2 } from "./Menu2";
import { Skins } from "./Skins";
import { StateManager } from "./StateManager";

export class CrossyCatStateManager extends StateManager {
    public generateDictionary(): void {
        this.addStateSlot(CrossyCatStates.MENU, new Menu());
        this.addStateSlot(CrossyCatStates.MENU2, new Menu2());
        this.addStateSlot(CrossyCatStates.CREDITS, new Credits());
        this.addStateSlot(CrossyCatStates.HATS, new Hats());
        this.addStateSlot(CrossyCatStates.FLASK, new Flask());
        this.addStateSlot(CrossyCatStates.SKINS, new Skins());
    }
    public async setCurrentState(name: CrossyCatStates) {
        console.log("setCurrentState");
        super.setCurrentState(name);
    }
}
