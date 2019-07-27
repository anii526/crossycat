import * as PIXI from "pixi.js";
import { app } from "..";

export class Game extends PIXI.Sprite {
    constructor() {
        super();
    }
    public init() {
        this.createBg();
    }
    private createBg() {
        const bg = new PIXI.Sprite(app.getTexture("bg"));
        this.addChild(bg);

        const tileset = new PIXI.Sprite(app.getTexture("tileset"));
        this.addChild(tileset);

        const cat = new PIXI.Sprite(app.getTexture("cat"));
        this.addChild(cat);
    }
}
