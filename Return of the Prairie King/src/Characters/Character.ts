import AssetManager from "../Global/AssetManager";
import { STATE } from "../Global/Constants";
import GameObject from "../Objects/GameObject";

export default class Character extends GameObject {
    
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