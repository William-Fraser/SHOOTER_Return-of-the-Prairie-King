// game constants
export const STAGE_WIDTH:number = 704;
export const STAGE_HEIGHT:number = 704;
//width and height should be the same for staging purposes
export const FRAME_RATE:number = 30;

//player constants
export const PLAYER_MOVESPEED:number = 7;
export const PLAYER_FIRERATE:number = 2;

//states
export enum STATE
{
    IDLE,
    SPAWNING,
    MOVING,
    DYING,
    DEAD
}

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/spritesheets/assets.json",
        id:"assets",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/assets.png",
        id:"assets",
        data:0
    }/*,
    {
        type:"sound",
        src:"./lib/sounds/beep.ogg",
        id:"beep",
        data:4
    }*/ 
];