

    //non editable magic numbers
    const WIDTH:number = 0;
    const HEIGHT:number = 0;

export default class Map {


    // Map Array's to display battleground & transition smoothly
    CurrentMap:createjs.Sprite[][];
    NextMap:createjs.Sprite[][];

    //arrays to read maps
    allRows:createjs.Sprite[]; // arraylength = height
    readRow:createjs.Sprite[]; // arraylength = width

    Constructor() {

        //init Display
        this.allRows = new Array(HEIGHT);
        this.readRow = new Array(WIDTH);
    }
    SetMap() {

        
    }
}