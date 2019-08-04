export class ScrollerBackground extends PIXI.Sprite {
    protected bgs: PIXI.Sprite[];
    constructor() {
        super();
    }
    public init(name: string) {
        this.bgs = [];
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
