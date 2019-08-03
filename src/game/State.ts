import { StateManager } from "./StateManager";

export class State extends PIXI.Sprite {
    public name: string;
    public manager: StateManager;
    constructor() {
        super();

        setTimeout(() => {
            this.init();
        }, 10);
    }
    public init() {
        //
    }
    public runState(oldState: State) {
        //
    }
    public exitState(newState: State) {
        //
    }
    public update(delta: number) {
        //
    }
}
