import AssetManager from "../Global/AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import Object from "./GameObject";

export default class Bullet extends Object {

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);

    }

    // ----- public methods
    public AttackCharacter():void {
        // despawn bullet and remove it from the characters array
        
    }
}