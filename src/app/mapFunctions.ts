//defines an automatic generated map
//
// attr: height
// attr: width
// attr: map (2D array of tiles)


export enum floor{
    TERR = 0,
    WALL = 1,
}

export class Map{
    height: number;
    width: number;
    map: number[][];
    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
        this.map = new Array(height);
        for(let i = 0; i < height; i++){
            this.map[i] = new Array(width);
        }
        for(let i = 0; i< height; i++){
            for(let j = 0; j< width; j++){
                this.map[i][j] = floor.WALL;
            }
        }
    }

    toString(){
        let stringMap = "";
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                stringMap += this.map[i][j];
            }
            stringMap += "\n\t";
        }
        return stringMap;
    }

    printMap(){
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                console.log(this.map[i][j]);
            }
        }
    }
}

export class IslandGenerator{
    position: number[];
    map: Map;
    constructor(position: number[], map: Map){
        this.position = position;
        this.map = map;
    }

    getLegalMoves(){
        let legalMoves = [];
        if (this.position[0] - 1 >= 0){
            legalMoves.push("up");
        }
        if (this.position[0] + 1 < this.map.height){
            legalMoves.push("down");
        }
        if (this.position[1] - 1 >= 0){
            legalMoves.push("left");
        }
        if (this.position[1] + 1 < this.map.width){
            legalMoves.push("right");
        }
        return legalMoves;
    }


    moveGenerator(direction: string){
         if (direction === "up"){
              this.position[0] -= 1;
         }
         else if (direction === "down"){
              this.position[0] += 1;
         }
         else if (direction === "left"){
              this.position[1] -= 1;
         }
         else if (direction === "right"){
              this.position[1] += 1;
         }
    }

    //print the current position of the generator
    //set the block at the generator's position
    setBlock(block:number){
        this.map.map[this.position[0]][this.position[1]] = block;
    }
    //generates an island in a given position, using random walk
    generateIsland(terrainVolume:number, initPos:number[]){
        initPos = this.position;
        this.setBlock(floor.TERR);
        let exception = false;

        while( terrainVolume > 0 || exception){
            let directions = this.getLegalMoves();
            let direction = directions[Math.floor(Math.random() * 4)];
            this.moveGenerator(direction);
            this.setBlock(floor.TERR);
            terrainVolume -= 1;
        }
    }
        
}