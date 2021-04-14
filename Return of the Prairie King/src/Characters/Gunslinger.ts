import AssetManager from "../Global/AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import Character from "./Character";

export default class Gunslinger extends Character {

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager)

        this.PositionMe(STAGE_WIDTH/2, STAGE_HEIGHT/2);
    }

    //public methods
    public Shoot():void {
        //spawns bullet
    }
}