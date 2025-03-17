
"use client";
import Button from "./components/Button";
import MapDisplay from "./mapDisplay";
import { useState } from "react";
import {IslandGenerator, Map} from "./mapFunctions";
import Slider from "./components/Slider";

export default function Selector() {
    const [size, setSize] = useState(50);
    const [volume, setVolume] = useState(50);
    const [map, setMap] = useState(new Map(size, size));
    
    function handleNewGeneration() {
        const newMap = new Map(size, size);
        const islandGenerator = new IslandGenerator([newMap.height / 2, newMap.width/ 2], newMap);
        islandGenerator.generateIsland(volume, islandGenerator.position);
        setMap(newMap);
    }
    return (
        <div className="flex">
            <MapDisplay map={map}/>
            <div className="m-4">
                <Button onClick={handleNewGeneration} className=" bg-black text-white py-1 px-6 rounded-sm cursor-pointer m-1 w-max bg-center bg-repeat hover:bg-opacity-80">
                    Generate
                </Button>
                <Slider label="TERRAIN" value={volume} setValue={setVolume} min={0} max={1000} step={10} onSelectAct={handleNewGeneration}/>

            </div>
            
        </div>
    );

    
}