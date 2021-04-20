import { STATE, PLAYER_FIRERATE, PLAYER_MOVESPEED, STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import AssetManager from "../Global/AssetManager";
import Gunslinger from "./Gunslinger";
import { DIRECTION } from "../Objects/GameObject";

// player character includes controller and status
export default class Player extends Gunslinger {

    private currentMoveSpeed:number;
    private currentFireRate:number;
        
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);

        //player fields
        this.currentFireRate = PLAYER_FIRERATE;
        this.currentMoveSpeed = PLAYER_MOVESPEED;

        // init sprite with animation
        this._sprite = assetManager.getSprite("assets", "Gunslinger/IdleDown", 0, 0);
        this._sprite.play();
        stage.addChild(this._sprite);
        this.PositionMe(STAGE_WIDTH/2, STAGE_HEIGHT/2); // magic numbers to set in middle of stage
        this._sprite.scaleX = 2;
        this._sprite.scaleY = 2;
    }
    
    // ----- public methods
    public Update() {
        super.Update();

        this._movementSpeed = this.currentMoveSpeed;

        switch(this._state) {
            case STATE.IDLE:
                //set idle animation depending on direction
                switch(this._lastDirection) {
                    case DIRECTION.N:
                        this._sprite.gotoAndPlay("Gunslinger/IdleUp");
                        break;
                    case DIRECTION.E:
                        this._sprite.gotoAndPlay("Gunslinger/IdleRight");
                        break;
                    case DIRECTION.S:
                        this._sprite.gotoAndPlay("Gunslinger/IdleDown");
                        break;
                    case DIRECTION.W:
                        this._sprite.gotoAndPlay("Gunslinger/IdleLeft");
                        break;
                }
                break;
            case STATE.MOVING:
                if (this._direction != this._lastDirection) {
                    switch(this._direction) {
                        case DIRECTION.N:
                            this._sprite.gotoAndPlay("Gunslinger/WalkUpOne");
                            break;
                        case DIRECTION.E:
                            this._sprite.gotoAndPlay("Gunslinger/WalkRightOne");
                            break;
                        case DIRECTION.S:
                            this._sprite.gotoAndPlay("Gunslinger/WalkDownOne");
                            break;
                        case DIRECTION.W:
                            this._sprite.gotoAndPlay("Gunslinger/WalkLeftOne");
                            break;
                    }
                }
                break;
            }
        this._lastDirection = this._direction;
    }
}