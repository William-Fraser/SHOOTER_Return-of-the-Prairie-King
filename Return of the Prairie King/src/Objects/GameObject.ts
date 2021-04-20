import AsserManager from "../Global/AssetManager";
import { STATE } from "../Global/Constants";

export enum DIRECTION { // directions are used by UserInput and Bullet
    NULL,
    N,
    NW,
    W,
    SW,
    S,
    SE,
    E,
    NE
}

export default class GameObject {
    //protected variables
    protected _movementSpeed:number;
    protected _state:number;
    protected _direction:number; // not all children use field

    //create sprite variable
    protected _sprite:createjs.Sprite;

    //protected global fields
    protected stage:createjs.StageGL;
    protected assetManager:AsserManager;

    constructor(stage:createjs.StageGL, assetManager:AsserManager)
    {
        // init of properties
        this.stage = stage;
        this.assetManager = assetManager;
        this._state = STATE.IDLE;
        // child sets speed
        this._movementSpeed = 1;
        // child sets direction
        this._direction = DIRECTION.NULL; 

        // child initializes sprite with animation
        this._sprite = assetManager.getSprite("assets", "sprite/animation", 0, 0);// set basic sprite field for events
        // stage.addChild(this._sprite);

    }

    // ----- gets/sets
    get sprite() 
    { return this._sprite; }
    get state() 
    { return this._state; }
    set state(value:number)
    { this._state = value; }
    set direction(value:number)
    { this._direction = value; }

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

        console.debug("STATE: "+this.state+", DIRECTION: "+ this._direction);
        switch(this._state) {
            case STATE.IDLE:
                //idle does nothing
                // set animation to idle?
            return;
            case STATE.MOVING:
                
                switch(this._direction){
                    case DIRECTION.N :
                        sprite.y -= this._movementSpeed;
                    return;
                    case DIRECTION.NW :
                        sprite.y -= this._movementSpeed;
                        sprite.x -= this._movementSpeed;
                    return;
                    case DIRECTION.W :
                        sprite.x -= this._movementSpeed;
                    return;
                    case DIRECTION.SW :
                        sprite.y += this._movementSpeed;
                        sprite.x -= this._movementSpeed;
                    return;
                    case DIRECTION.S :
                        sprite.y += this._movementSpeed;
                    return;
                    case DIRECTION.SE :
                        sprite.y += this._movementSpeed
                        sprite.x += this._movementSpeed;
                    return;
                    case DIRECTION.E :
                        sprite.x += this._movementSpeed;
                    return;
                    case DIRECTION.NE :
                        sprite.y -= this._movementSpeed
                        sprite.x += this._movementSpeed;
                    return;
                }

            return;
        }
    }
}