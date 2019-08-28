import { app } from "../../../..";
import { BaseItem } from "./BaseItem";

export class Wall extends BaseItem {
    public init() {
        super.init();

        this.skin.texture = app.getTexture("wall");
    }
}
