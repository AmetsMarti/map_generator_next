"use client";
import {IslandGenerator, Map, floor} from "./mapFunctions";


export default function MapDisplay({map}: {map: Map}){
    return (
        <div className="border-gray-200 border-1">
            <div className="border-gray-600">{mapToGrid(map)}</div>
        </div>
    );
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

//Generates an HTML grid of a map
function mapToGrid(map: Map){
    let grid = [];
    
    for (let i = 0; i < map.height; i++){
        let row = [];
        for (let j = 0; j < map.width; j++){
            let className = i + "," + j;

            if (map.map[i][j] === floor.WALL){
                className = `${className} bg-white h-4 w-4 transition-opacity duration-500 opacity-100 border-dotted border-2 animate-fade-in`;
                row.push(<div key={i.toString() + "," + j.toString()} className = {className}></div>);
            }
            else{
                className = `${className} bg-black h-4 w-4 transition-opacity duration-500 opacity-100 animate-fade-in border-1 border-dotted shadow-lg`;
                row.push(<div key={i.toString() + "," + j.toString()} className= {className}></div>);
            }
        }
        grid.push(<div key={i.toString()} className="flex">{row}</div>);
    }
    return grid;
}