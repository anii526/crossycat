import { BaseItem } from "./BaseItem";
export class Empty extends BaseItem {
    public init() {
        super.init();
    }
    public hit() {
        console.log("hit");
        this.isActive = false;
        return false;
    }
    public check() {
        this.isActive = true;
    }
}
