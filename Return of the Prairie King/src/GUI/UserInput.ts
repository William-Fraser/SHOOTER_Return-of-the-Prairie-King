import {STATE} from "../Global/Constants"
import Player from "../Characters/Player";
import {DIRECTION} from "../Objects/GameObject";

export default class UserInput {
    
    //init fields
    
    //movement
    private WKey:boolean = false;
    private AKey:boolean = false;
    private SKey:boolean = false;
    private DKey:boolean = false;

    //shooting and inventory
    private leftKey:boolean = false;
    private rightKey:boolean = false;
    private upKey:boolean = false;
    private downKey:boolean = false;
    private spaceBar:boolean = false;

    // ----- private methods
    private Movement(player:Player):void {
        
        if (this.WKey) {
            //walk North
            player.StartMe();
            player.direction = DIRECTION.N;
        }
        else if (this.WKey && this.AKey) {
            //walk NW
            player.StartMe();
            player.direction = DIRECTION.NW;
        }
        else if (this.AKey) {
            //walk west
            player.StartMe();
            player.direction = DIRECTION.W;
        }
        else if (this.AKey && this.SKey) {
            //walk SW
            player.StartMe();
            player.direction = DIRECTION.SW;
        }
        else if (this.SKey) {
            //walk south
            player.StartMe();
            player.direction = DIRECTION.S;
        }
        else if (this.SKey && this.DKey) {
            //walk SE
            player.StartMe();
            player.direction = DIRECTION.SE;
        }
        else if (this.DKey) {
            //walk east
            player.StartMe();
            player.direction = DIRECTION.E;
        }
        else if (this.DKey && this.WKey) {
            //walk NE
            player.StartMe();
            player.direction = DIRECTION.NE;
        }
        else {
            //idle player
            player.IdleMe();
            player.direction = DIRECTION.NULL;
        }
    }
    private Shooting() {
        if (this.rightKey) {
            //shoot east

        }
        else if (this.rightKey && this.upKey) {
            //shoot NE

        }
        else if (this.upKey) {
            //shoot north

        }
        else if (this.upKey && this.leftKey) {
            //shoot NW

        }
        else if (this.leftKey) {
            //shoot west

        }
        else if (this.leftKey && this.downKey) {
            //shoot SW

        }
        else if (this.downKey) {
            //shoot south

        }
        else if (this.downKey && this.rightKey) {
            //shoot SE

        }
    }

    // ----- public methods
    public Input(keyState:boolean, e:KeyboardEvent):void { 
        if (keyState) {
            if      (e.key == "w") this.WKey = true;
            else if (e.key == "a") this.AKey = true;
            else if (e.key == "s") this.SKey = true;
            else if (e.key == "d") this.DKey = true;
            else if (e.key == "ArrowUp") this.upKey = true;
            else if (e.key == "ArrowDown") this.downKey = true;
            else if (e.key == "ArrowLeft") this.leftKey = true;
            else if (e.key == "ArrowRight") this.rightKey = true;
            else if (e.key == " ") this.spaceBar = true;
        } else {
            if      (e.key == "w") this.WKey = false;
            else if (e.key == "a") this.AKey = false;
            else if (e.key == "s") this.SKey = false;
            else if (e.key == "d") this.DKey = false;
            else if (e.key == "ArrowUp") this.upKey = false;
            else if (e.key == "ArrowDown") this.downKey = false;
            else if (e.key == "ArrowLeft") this.leftKey = false;
            else if (e.key == "ArrowRight") this.rightKey = false;
            else if (e.key == " ") this.spaceBar = false;
            
        }
        
    }

    public Update(player:Player):void {

        this.Movement(player);
        this.Shooting();    

        //GUI extrass
        if (this.spaceBar) {
            //use item
        }
    }
}