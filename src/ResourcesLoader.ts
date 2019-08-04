import * as PIXI from "pixi.js";
// import * as WebFont from 'webfontloader';
// import { PreloaderManager } from './utils/preloader/preloader-manager';
// import { mainSlot } from 'index';
/**
 * Created by aniii526 on 1.09.2017.
 */
export class ResourcesLoader {
    protected loader: PIXI.Loader;
    protected fontFamilies: string[];
    protected fontUrls: string[];
    constructor() {
        this.loader = new PIXI.Loader();
    }
    public init() {
        return new Promise((resolve, reject) => {
            const version = 5;

            this.loader.add("bg", "./assets/back.png?" + version);
            this.loader.add("tileset", "./assets/tileset.png?" + version);
            this.loader.add("cat", "./assets/sprite-2-1.png?" + version);
            this.loader.add("./assets/test.json?" + version);
            this.loader.add("panel1", "./assets/panel1.png?" + version);
            this.loader.add("panel3", "./assets/panel3.png?" + version);
            this.loader.add("water", "./assets/sprite-6-0.png?" + version);
            this.loader.add("tree", "./assets/sprite-145-0.png?" + version);
            this.loader.add("bushes", "./assets/sprite-147-0.png?" + version);
            this.loader.add("title", "./assets/sprite-82-1.png?" + version);
            this.loader.add("playBtn", "./assets/sprite-68-0.png?" + version);
            this.loader.add(
                "settingsBtn",
                "./assets/sprite-111-0.png?" + version
            );

            this.loader.add("hat1", "./assets/sprite-16-0.png?" + version);

            this.loader.on("progress", (loader, res) => {
                // (loader.progress);
                // PreloaderManager.instance.setProgress(loader.progress > 90 ? 90 : loader.progress)
            });

            this.loader.once("complete", (loader, res) => {
                // ('Нужно сделать загрузку шрифтов');
                // WebFont.load({
                //     custom: {
                //         families: this.fontFamilies,
                //         urls: this.fontUrls
                //     },
                //     active: () => {
                //         resolve();
                //     }
                // });
                resolve();
            });
            this.loader.on("error", () => {
                reject("ПРОИЗОШЛА ОШИБКА ЗАГРУЗКИ");
            });

            this.loader.load();
        });
    }
}
