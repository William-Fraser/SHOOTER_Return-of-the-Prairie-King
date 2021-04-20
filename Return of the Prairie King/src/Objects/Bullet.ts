import AssetManager from "../Global/AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import Object from "./GameObject";

export default class Bullet extends Object {

    private bullets:Object[]; 

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);

        // init sprite
        this._sprite = assetManager.getSprite("assets", "bullets/RoundGrey", 0, 0);
        this._sprite.play();
        stage.addChild(this._sprite);
        
    }

    // ----- private methods
    private AttackCharacter():void {
        // despawn bullet and remove it from the object array
        
    }
    private DespawnBullet():void {
        // stops bullet on call

    }

    // ----- public methods 
    public ShootBullet(characterX:number, characterY:number):void {
        // sets new bullet to pos and adds it to the object array
        this.PositionMe(characterX, characterY); // magic numbers to set in middle of stage
        
    }

    public Update() {

    }
}