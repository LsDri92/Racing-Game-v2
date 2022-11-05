import { Texture } from "pixi.js";
import { Button } from "../Utils/Buttons";
import { IUpdateable } from "../Utils/IUpdateable";
import { SceneBase } from "../utils/SceneBase";
import { SceneManager } from "../utils/SceneManager";
import { MainMenuScene } from "./MainMenuScene";

export class LoseScene extends SceneBase implements IUpdateable {
    goToMenu: Button;

    constructor() {
        super()

        this.goToMenu = new Button(Texture.from("menu"), Texture.from("menu"), Texture.from("menu"));
        this.addChild(this.goToMenu);
        this.goToMenu.on("buttonClick", this.onToMenu, this);
        this.goToMenu.position.set();
        this.goToMenu.scale.set(0.5, 0.3)


    }

    private onToMenu(): void {
        SceneManager.changeScene(new MainMenuScene);
    }




    public update(_deltaFrame: number, _deltaTime?: number | undefined): void {



    }

}


