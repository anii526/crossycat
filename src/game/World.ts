import * as PIXI from "pixi.js";
import { app } from "..";
import { CrossyCatSceneManager } from "./scenes/CrossyCatSceneManager";
import { CrossyCatScenes } from "./scenes/CrossyCatScenes";

export class World extends PIXI.Sprite {
    constructor() {
        super();
    }
    public init() {
        // this.createBg();
        this.createSceneManager();
    }
    public createSceneManager() {
        const crossyCatSceneManager = new CrossyCatSceneManager(this);
        crossyCatSceneManager.init();
        crossyCatSceneManager.setCurrentScene(CrossyCatScenes.GAME);

        //
        app.pixi.app.ticker.add(delta => {
            crossyCatSceneManager.update(delta);
        });
    }
    public createBg() {
        const fish = new PIXI.AnimatedSprite(app.getTexturesForName("fish", 4));
        fish.anchor.set(0.5, 0.5);
        fish.position.x = 160;
        fish.position.y = 200;
        fish.animationSpeed = 16 / 60;
        fish.play();
        this.addChild(fish);

        app.pixi.app.ticker.add(delta => {
            fish.rotation += 0.1 * delta;
        });
    }
}
