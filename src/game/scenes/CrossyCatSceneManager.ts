import { SceneManager } from "../SceneManager";
import { Credits } from "./Credits";
import { CrossyCatScenes } from "./CrossyCatScenes";
import { Flask } from "./Flask";
import { Game } from "./Game";
import { Hats } from "./Hats";
import { Menu } from "./Menu";
import { Skins } from "./Skins";

export class CrossyCatSceneManager extends SceneManager {
    public generateDictionary(): void {
        this.addScene(CrossyCatScenes.GAME, new Game());
        this.addScene(CrossyCatScenes.MENU, new Menu());
        this.addScene(CrossyCatScenes.CREDITS, new Credits());
        this.addScene(CrossyCatScenes.HATS, new Hats());
        this.addScene(CrossyCatScenes.FLASK, new Flask());
        this.addScene(CrossyCatScenes.SKINS, new Skins());
    }
    public async setCurrentScene(name: CrossyCatScenes) {
        console.log("setCurrentScene");
        super.setCurrentScene(name);
    }
}
