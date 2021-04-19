import AssetManager from "../Global/AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../Global/Constants";
import Character from "./Character";
import Bullet from "../Objects/Bullet"

export default class Gunslinger extends Character {

    private currentMoveSpeed:number;
    private currentFireSpeed:number;

    private bullets:number[]; 
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);


        this.PositionMe(STAGE_WIDTH/2, STAGE_HEIGHT/2);
        stage.addChild(this.sprite);
    }

    //public methods
    public Shoot():void {
        //spawns bullet
        
        
    }
}