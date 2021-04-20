import {STAGE_HEIGHT, STAGE_WIDTH} from "../Global/Constants";
import AssetManager from "../Global/AssetManager";
import {randomMe} from "../Global/Toolkit";

const TOTALTILES:number = 22; // magic number for the ammount of tiles it takes to cover the square screen
    
export default class Map {

    // Map Array's to display battleground & transition smoothly
    private currentMap:createjs.Sprite[][];
    private setMap:createjs.Sprite[][]; // the map that the current map is being set to, seperated for animation
    private tileHeight:number;
    private tileWidth:number;
    

    // init friendly fields
    stage:createjs.StageGL;
    assetManager:AssetManager;
        
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        
        //init tile bounds for displaying Map
        let tileRef:createjs.Sprite; // a single tile sprite for to access the dimensions
        tileRef = assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", STAGE_WIDTH, STAGE_HEIGHT);
        this.tileHeight = tileRef.getBounds().height;
        this.tileWidth = tileRef.getBounds().width;
        
        this.setMap = [];
        for (let Y:number = 0; Y <= 22; Y++) {
            this.setMap[Y] = [];
            for (let X:number = 0; X <= 22; X++) {
                this.setMap[Y][X] = assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", this.tileWidth*X, this.tileHeight*Y);
                
                // add tile to array
                stage.addChild(this.setMap[Y][X]); 
            }
        }

        //init passed fields for easy reading
        this.assetManager = assetManager;
        this.stage = stage;

        //create first map
        this.CreateMap();
        this.setCurrentMap();
    }

    // ----- gets/sets
    private setCurrentMap():void {
        
        this.currentMap = this.setMap;

        for (let Y:number = 0; Y <= 22; Y++) {
            for (let X:number = 0; X <= 22; X++) {

                this.stage.addChild(this.currentMap[Y][X]);
            }
        }
    }

    // ----- private methods
    private AddEnterances():void {
        
        let enteranceSize:number = 4;
        // sets starting and stopping position of array to the middle of the wall
        let start:number = (TOTALTILES/2+1) - (enteranceSize/2);
        let stop:number = (TOTALTILES/2+1) + (enteranceSize/2);
        
        let placeTile = 32*start;
        let placementReset = placeTile;
        //console.debug("i: "+i+", reset: "+placementReset+", placeTile: "+placeTile);

        //add north
        for (let i = start; i < stop; i++){
            this.setMap[1][i] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", placeTile, 0);
            placeTile+=32
        }
        placeTile = placementReset;
        //add south
        for (let i = start; i < stop; i++){
            this.setMap[TOTALTILES][i] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", placeTile, 672);
            placeTile+=32
        }
        placeTile = placementReset;
        //add east
        for (let i = start; i < stop; i++){
            this.setMap[i][TOTALTILES] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", 672, placeTile);
            placeTile+=32
        }
        placeTile = placementReset;
        //add west
        for (let i = start; i < stop; i++){
            this.setMap[i][1] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", 0, placeTile);
            placeTile+=32
        }
        placeTile = placementReset;
    }
    private CreateMap():void {
        
        // holders for placeing the tiles
        let holderX:number = 0;
        let holderY:number = 0;
        
        
        // double nested loop to create map array
        for (let Y:number = 1; Y <= TOTALTILES; Y++) {
            for (let X:number = 1; X <= TOTALTILES; X++) {
                
                
                // check if tile is part of border
                console.debug("X,Y : "+X+","+Y);
                console.debug("Xhold,YHold : "+holderX+","+holderY)
                if ((Y == 1 || Y == TOTALTILES) || (X == 1 || X == TOTALTILES)) {
                    
                    if        (Y == 1) {
                        console.debug("north");
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Top",     holderX, holderY);
                    } else if (X == 1) {
                        console.debug("west");
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Left",    holderX, holderY);
                    } else if (X == TOTALTILES) {
                        console.debug("east");
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Right",   holderX, holderY);
                    } else if (Y == TOTALTILES) {
                        console.debug("south");
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Bottom",  holderX, holderY);
                    } 
                    //check for corners
                    if        (Y == TOTALTILES && X == TOTALTILES) {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/BottomRightCorner", holderX, holderY);
                    } else if (Y == TOTALTILES && X == 1) {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/BottomLeftCorner",  holderX, holderY);
                    } else if (Y == 1 && X == TOTALTILES) {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/TopRightCorner",    holderX, holderY);
                    } else if (Y == 1 && X == 1) {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/TopLeftCorner",     holderX, holderY);
                    } 
                }
                
                //console.debug("Tile Width, Tile Height : "+this.tileWidth+", "+this.tileHeight);
                else { // add ground tile
                    let chooseType:number = randomMe(0, 10);
                    if (chooseType > 8) {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/GroundAlt", holderX, holderY);
                    } else {
                        this.setMap[Y][X] = this.assetManager.getSprite("assets", "Backgrounds/TileDesert/Ground", holderX, holderY);
                    }
                }
                holderX += 32; 
            }
            holderX = 0;
            holderY += 32;
        }

        this.AddEnterances();
        console.debug(">> created map");
    }
    
}