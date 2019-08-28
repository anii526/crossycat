export class BaseItem extends PIXI.Sprite {
    public skin: PIXI.Sprite;
    public isActive: boolean;
    constructor() {
        super();
        this.isActive = false;
    }
    public init() {
        this.skin = new PIXI.Sprite();
        this.skin.anchor.set(0.5, 0.5);
        this.addChild(this.skin);

        this.isActive = true;
    }
    public hit() {
        //
    }
}
