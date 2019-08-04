import { Credits } from "./Credits";
import { CrossyCatStates } from "./CrossyCatStates";
import { Menu } from "./Menu";
import { Menu2 } from "./Menu2";
import { StateManager } from "./StateManager";

export class CrossyCatStateManager extends StateManager {
    public generateDictionary(): void {
        this.addStateSlot(CrossyCatStates.MENU, new Menu());
        this.addStateSlot(CrossyCatStates.MENU2, new Menu2());
        this.addStateSlot(CrossyCatStates.CREDITS, new Credits());
    }
    public async setCurrentState(name: CrossyCatStates) {
        console.log("setCurrentState");
        super.setCurrentState(name);
    }
}
