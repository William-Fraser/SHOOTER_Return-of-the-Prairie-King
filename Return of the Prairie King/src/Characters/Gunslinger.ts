import AssetManager from "../Global/AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import Character from "../Characters/Character";
import Bullet from "../Objects/Bullet";

export default class Gunslinger extends Character {
    
    private currentMoveSpeed:number;
    private currentFireSpeed:number;

    private bullets:number[]; 
    
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);

        // init sprite with animation
        this._sprite = assetManager.getSprite("assets", "Gunslinger/IdleDown", 0, 0);
        this._sprite.play();
        stage.addChild(this._sprite);
        this.PositionMe(STAGE_WIDTH/2-32, STAGE_HEIGHT/2-32); // magic numbers to set in middle of stage
        this._sprite.scaleX = 2;
        this._sprite.scaleY = 2;

        this.currentFireSpeed = 7;
        this.currentMoveSpeed = 3;

        stage.addChild(this.sprite);
    }
}
