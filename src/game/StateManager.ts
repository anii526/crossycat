import { State } from "./State";

export class StateManager {
    public current: State;
    public currentName: string;
    public dictionaryStates: Map<string, State>;
    private container: PIXI.Container;
    constructor(aContainer: PIXI.Container) {
        this.container = aContainer;
        this.dictionaryStates = new Map();
        this.generateDictionary();
    }
    public init() {
        //
    }
    public update(time: number) {
        //
    }
    public generateDictionary(): void {
        throw new Error("Не заполнен словарь стейтов");
    }
    public addStateSlot(name: string, state: State): void {
        state.manager = this;
        state.name = name;
        this.dictionaryStates.set(name, state);
    }
    public getCurrent(): State {
        return this.current;
    }
    public async setCurrentState(name: string) {
        this.currentName = name;
        if (!this.dictionaryStates.has(name)) {
            throw new Error(
                "Режим " + name + " не добавлен в StateSlotManager"
            );
        }
        const newState: State = this.dictionaryStates.get(name);
        const oldState: State = this.current;

        this.current = newState;

        if (oldState) {
            oldState.exitState(this.current);
            this.container.removeChild(oldState);
        }
        newState.runState(oldState);
        this.container.addChild(newState);
    }
}
