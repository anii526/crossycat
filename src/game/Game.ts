import * as PIXI from "pixi.js";
import { app } from "..";

export class Game extends PIXI.Sprite {
    private bgs: PIXI.Sprite[];
    constructor() {
        super();
    }
    public init() {
        this.createBg();
    }
    private createBg() {
        this.bgs = [];
        const bg1 = new PIXI.Sprite(app.getTexture("bg"));
        this.addChild(bg1);
        const bg2 = new PIXI.Sprite(app.getTexture("bg"));
        bg2.position.x = 320;
        this.addChild(bg2);
        this.bgs.push(bg1);
        this.bgs.push(bg2);

        const panelLeft = new PIXI.Sprite(app.getTexture("panel3"));
        panelLeft.anchor.set(0, 1);
        panelLeft.position.y = 480;
        this.addChild(panelLeft);

        const paneRight = new PIXI.Sprite(app.getTexture("panel3"));
        paneRight.anchor.set(1, 1);
        paneRight.position.x = 320;
        paneRight.position.y = 480;
        this.addChild(paneRight);

        const cat = new PIXI.Sprite(app.getTexture("cat"));
        cat.anchor.set(0.5, 1);
        cat.position.x = 100;
        cat.position.y = 100;
        // this.addChild(cat);

        const animcat = new PIXI.AnimatedSprite(
            app.getTexturesForName("image_part_00", 4)
        );
        animcat.anchor.set(0.5, 1);
        animcat.position.x = 100;
        animcat.position.y = 100;
        animcat.animationSpeed = 16 / 60;
        animcat.play();
        this.addChild(animcat);

        const fish = new PIXI.AnimatedSprite(app.getTexturesForName("fish", 4));
        fish.anchor.set(0.5, 0.5);
        fish.position.x = 160;
        fish.position.y = 200;
        fish.animationSpeed = 16 / 60;
        fish.play();
        this.addChild(fish);

        app.pixi.app.ticker.add(delta => {
            fish.rotation += 0.1 * delta;
            // bg1.position.x -= 1 * delta;
            // bg2.position.x -= 1 * delta;
            // if (bg1.position.x < -320) {
            //     bg1.position.x = 0;
            // }
            for (const iterator of this.bgs) {
                iterator.position.x -= 1 * delta;
            }
            for (const iterator of this.bgs) {
                if (iterator.position.x < -320) {
                    iterator.position.x = 320 + (iterator.position.x + 320);
                }
            }
        });
    }
}
