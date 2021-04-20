// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Global/Constants";
import AssetManager from "./Global/AssetManager";
import Object from "./Objects/GameObject"
import Character from "./Characters/Character";
import Map from "./World/Map"
import Player from "./Characters/Player";
import UserInput from "./GUI/UserInput";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;

// assetmanager object
let assetManager:AssetManager;

// game objects
let map:Map;
let player:Player;
let user:UserInput;

// --------------------------------------------------- event handlers
function onReady(e:createjs.Event):void {
    console.log(">> adding sprites to game");
    
    // construct game object sprites
    map = new Map(stage, assetManager);
    player = new Player(stage, assetManager);
    user = new UserInput();

    //key event listeners
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onKeyDown(e:KeyboardEvent):void {
    user.Input(true, e); // true if key pressed
}

function onKeyUp(e:KeyboardEvent):void {
    user.Input(false, e); // false if key if not being pressed
}

function onTick(e:createjs.Event):void {
    // TESTING FPS
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // This is your game loop :)
    player.Update();
    user.Update(player);


    // update the stage!
    stage.update();
}

// --------------------------------------------------- main method
function main():void {
    console.log(">> initializing");

    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);    
}

main();