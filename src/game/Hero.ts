import { app } from "..";
import { BaseItem } from "./scenes/game/items/BaseItem";
const TWEEN = require("tween.js");

export class Hero extends PIXI.Sprite {
    public skinHero: PIXI.AnimatedSprite;
    public skinHat: PIXI.Sprite;
    public skinHeroJump: PIXI.Sprite;
    public container: PIXI.Sprite;
    public box: PIXI.Graphics;
    constructor() {
        super();
    }
    public init() {
        this.container = new PIXI.Sprite();
        this.container.anchor.set(0.5, 1);
        this.addChild(this.container);

        this.skinHero = new PIXI.AnimatedSprite(
            app.getTexturesForName("image_part_00", 4)
        );
        this.skinHero.anchor.set(0.5, 1);
        this.skinHero.animationSpeed = 16 / 60;
        this.skinHero.play();
        this.container.addChild(this.skinHero);

        this.skinHeroJump = new PIXI.Sprite(app.getTexture("cat"));
        this.skinHeroJump.anchor.set(0.5, 1);
        this.skinHeroJump.visible = false;
        this.container.addChild(this.skinHeroJump);

        this.skinHat = new PIXI.Sprite(app.getTexture("hat1"));
        this.skinHat.position.x = 11;
        this.skinHat.anchor.set(0.5, 1);
        this.container.addChild(this.skinHat);

        this.box = new PIXI.Graphics();
        this.box.beginFill();
        this.box.drawRect(0, 0, 60, 32);
        this.box.endFill();
        this.box.position.x = -30;
        this.box.position.y = -32;
        // this.addChild(this.box);
        // this.box.position.set(0.5, 1);
    }
    public jump(
        heightJump: number,
        timeJump: number,
        paramsJump: [number, number, number],
        aItem: BaseItem
    ) {
        const item = aItem;
        return new Promise((resolve, reject) => {
            this.stateJump();
            const coordsStart = {
                x: this.position.x,
                y: this.position.y
            };
            const coordsFinish = {
                x: paramsJump[0],
                y: heightJump
            };

            const time = timeJump;

            const tween = new TWEEN.Tween(coordsStart);
            tween.to(coordsFinish, time);
            tween.easing(TWEEN.Easing.Cubic.Out);
            tween.onUpdate(() => {
                this.position.x = coordsStart.x;
                this.position.y = coordsStart.y;
            });
            tween.onComplete(() => {
                const coordsStart2 = {
                    x: coordsFinish.x
                };
                const coordsFinish2 = {
                    x: paramsJump[1]
                };
                const tween2 = new TWEEN.Tween(coordsStart2);
                tween2.to(coordsFinish2, 300);
                tween2.easing(TWEEN.Easing.Quadratic.InOut);
                tween2.onUpdate(() => {
                    this.position.x = coordsStart2.x;
                    const dist = Math.abs(item.position.x - this.position.x);
                    if (dist < 30) {
                        if (item.isActive) {
                            if (item.hit()) {
                                tween2.stop();
                                reject();
                            }
                        }
                    }
                });
                tween2.onComplete(() => {
                    const coordsStart3 = {
                        x: this.position.x,
                        y: this.position.y
                    };
                    const coordsFinish3 = {
                        x: paramsJump[2],
                        y: 385
                    };
                    const tween3 = new TWEEN.Tween(coordsStart3);
                    tween3.to(coordsFinish3, time);
                    tween3.easing(TWEEN.Easing.Cubic.In);
                    tween3.onUpdate(() => {
                        this.position.x = coordsStart3.x;
                        this.position.y = coordsStart3.y;
                    });
                    tween3.onComplete(() => {
                        item.check();
                        resolve();
                    });
                    tween3.start();
                });
                tween2.start();
            });
            tween.start();
        });
    }
    public back(posX: number, timeJump: number) {
        return new Promise(resolve => {
            const coordsStart = {
                x: this.position.x,
                y: this.position.y
            };
            const coordsFinish = {
                x: posX,
                y: 385
            };

            const time = timeJump;

            const tween = new TWEEN.Tween(coordsStart);
            tween.to(coordsFinish, time);
            tween.easing(TWEEN.Easing.Cubic.In);
            tween.onUpdate(() => {
                this.position.x = coordsStart.x;
                this.position.y = coordsStart.y;
            });
            tween.onComplete(() => {
                resolve();
            });
            tween.start();
        });
    }
    public stateReady() {
        this.skinHero.gotoAndPlay(0);
        this.skinHero.visible = true;

        this.skinHeroJump.visible = false;
    }
    public stateJump() {
        this.skinHero.gotoAndStop(0);
        this.skinHero.visible = false;

        this.skinHeroJump.visible = true;
    }
}
