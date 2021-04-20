import AssetManager from "../Global/AssetManager";
import Character from "../Characters/Character";
import Bullet from "../Objects/Bullet";

export default class Gunslinger extends Character {    

    //shooting fields
    private eventGunFire:createjs.Event;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager);
        
        //init event for Attack
        this.eventGunFire = new createjs.Event("GunFire", true, false);
        this._sprite.on("GunFire", this.onGunFire);
    }

    // ----- private methods
    private onGunFire() {
        //init new bullet
        let bullet:Bullet = new Bullet(this.stage, this.assetManager)
        
        bullet.ShootBullet(this._sprite.x, this._sprite.y)
    }
    private FireCooldown() {

    }
    
    // ----- public methods
    public ShootGun(fireGun:boolean):void {
        //calls to spawn bullet and starts firing cooldown / measured by firespeed
        this._sprite.dispatchEvent(this.eventGunFire);

    }
}
