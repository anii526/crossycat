import { app } from "../../../..";
import { BaseItem } from "./BaseItem";

export class Wall extends BaseItem {
    public init() {
        super.init();

        this.skin.texture = app.getTexture("wall");
    }
    public hit() {
        console.log("hit");
        if (this.skin.alpha === 1) {
            this.skin.alpha = 0.5;
            this.isActive = false;
            // this.isActive = true;
            return true;
        } else {
            this.isActive = false;
            return false;
        }
    }
    public check() {
        console.log("check");
        this.isActive = true;
    }
}
