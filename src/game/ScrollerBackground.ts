export class ScrollerBackground extends PIXI.Sprite {
    protected bgs: PIXI.Sprite[];
    constructor() {
        super();
    }
    public init(name: string) {
        this.bgs = [];
        // const bg1 = new PIXI.Sprite(app.getTexture("bg"));
        // this.addChild(bg1);
        // const bg2 = new PIXI.Sprite(app.getTexture("bg"));
        // bg2.position.x = 320;
        // this.addChild(bg2);
        // this.bgs.push(bg1);
        // this.bgs.push(bg2);
    }
    public update(delta: number) {
        for (const iterator of this.bgs) {
            iterator.position.x -= 0.5 * delta;
        }
        for (const iterator of this.bgs) {
            if (iterator.position.x < -320) {
                iterator.position.x = 320 + (iterator.position.x + 320);
            }
        }
    }
}
