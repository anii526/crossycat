import { app } from "..";
const TWEEN = require("tween.js");

export class Hero extends PIXI.Sprite {
    public skinHero: PIXI.AnimatedSprite;
    public skinHat: PIXI.Sprite;
    public container: PIXI.Sprite;
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

        this.skinHat = new PIXI.Sprite(app.getTexture("hat1"));
        this.skinHat.position.x = 11;
        this.skinHat.anchor.set(0.5, 1);
        this.container.addChild(this.skinHat);
    }
    public jump(
        heightJump: number,
        timeJump: number,
        paramsJump: [number, number, number]
    ) {
        return new Promise(reject => {
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
                        reject();
                    });
                    tween3.start();
                });
                tween2.start();
            });
            tween.start();
        });
    }
}
