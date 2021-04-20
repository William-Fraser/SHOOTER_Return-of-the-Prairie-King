import AssetManager from "../Global/AssetManager";
import { STATE } from "../Global/Constants";
import Object from "../Objects/Object";

export default class Character extends Object {
    
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager)
    }
    
    // ----- public methods 
    public killMe():void {
        if ((this._state == STATE.DYING)||(this._state == STATE.DEAD)) {return;}

        this.IdleMe();
        this._sprite.on("animationend", () => {
            this._sprite.stop();
            this.stage.removeChild(this._sprite);
            this._state = STATE.DEAD;
        });
        // NEEDS DEATH ANIMATION AFTER SUPER 
        //w\ this._state = GameCharacter.STATE_DYING;
    }
}