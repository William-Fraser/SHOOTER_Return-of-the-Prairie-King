// game constants
export const STAGE_WIDTH:number = 600;
export const STAGE_HEIGHT:number = 600;
export const FRAME_RATE:number = 30;

//player constants
export const PLAYER_MOVESPEED:number = 0;
export const PLAYER_FIRESPEED:number = 0;

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