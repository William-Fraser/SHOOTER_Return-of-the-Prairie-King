import AsserManager from "../Global/AssetManager";
import { STATE } from "../Global/Constants";

enum DIRECTION { // directions are only used by Character and Bullet
    DOWN,
    UP,
    LEFT,
    RIGHT
}

export default class Object {
    //protected variables
    protected _movementSpeed:number;
    protected _state:number;
    protected _direction:number; // not all children use field

    //create sprite variable
    protected _sprite:createjs.Sprite;

    //protected global fields
    protected stage:createjs.StageGL;

    constructor(stage:createjs.StageGL, assetManager:AsserManager)
    {
        // init of properties
        this.stage = stage;
        this._state = STATE.IDLE;
        // child sets speed
        // child sets direction

        // child initializes sprite with animation
        // this._sprite = assetManager.getSprite("assets", "sprite/animation", 0, 0);
        // this._sprite.play();
        // stage.addChild(this._sprite);

    }

    // ----- gets/sets
    get sprite() 
    { return this._sprite; }
    get state() 
    { return this._state; }
    set state(value:number)
    { this._state = value; }

    // ----- public methods
    public StartMe():void {
        if (this._state == STATE.IDLE) {
            this._state = STATE.MOVING;   
        }
    }
    public IdleMe():void {
        if (this._state == STATE.MOVING) {
            this._state = STATE.IDLE;   
        }
    }
    public PositionMe(x:number, y:number):void {
        this._sprite.x = x;
        this._sprite.y = y;
    }

    public Update() {
        // reference sprite object for cleaner code below
        let sprite:createjs.Sprite = this._sprite;

        switch(this._state) {
            case STATE.IDLE:
                //idle does nothing
                // set animation to idle?, hopefully not
            return;
            case STATE.MOVING:
                
                switch(this._direction){
                    case DIRECTION.UP :
                        sprite.y -= this._movementSpeed;
                    return;
                    case DIRECTION.DOWN :
                        sprite.y += this._movementSpeed;
                    return;
                    case DIRECTION.LEFT :
                        sprite.x -= this._movementSpeed;
                    return;
                    case DIRECTION.RIGHT :
                        sprite.x += this._movementSpeed;
                    return;
                }

            return;
        }
    }
}