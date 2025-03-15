import {IslandGenerator, Map, floor} from "./mapFunctions";


export default function MapDisplay() {
    let map = new Map(40, 40);
    map.printMap();
    let islandGenerator = new IslandGenerator([0, 0], map);
    islandGenerator.generateIsland(1200,islandGenerator.position);

    return (
        <div>
            <div>{mapToGrid(map)}</div>
        </div>


    );
}


//Generates an HTML grid of a map
function mapToGrid(map: Map){
    let grid = [];
    for (let i = 0; i < map.height; i++){
        let row = [];
        for (let j = 0; j < map.width; j++){
            let className = i + "," + j;

            if (map.map[i][j] === floor.WALL){
                className = className + "";
                row.push(<div key={i.toString() + "," + j.toString()} className = "bg-black h-4 w-4"></div>);
            }
            else{
                className = className + "bg-white h-4 w-4";
                row.push(<div key={i.toString() + "," + j.toString()} className= "bg-white h-4 w-4"></div>);
            }
        }
        grid.push(<div key={i.toString()} className="flex">{row}</div>);
    }
    return grid;
}