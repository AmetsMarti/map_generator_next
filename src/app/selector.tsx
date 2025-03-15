
"use client";
import Button from "./components/Button";
import MapDisplay from "./mapDisplay";
import { useState } from "react";
import {IslandGenerator, Map} from "./mapFunctions";
import Slider from "./components/Slider";

export default function Selector() {
    const [size, setSize] = useState(70);
    const [volume, setVolume] = useState(1200);
    const [map, setMap] = useState(new Map(size, size));
    
    function handleNewGeneration() {
        const newMap = new Map(size, size);
        const islandGenerator = new IslandGenerator([newMap.height / 2, newMap.width/ 2], newMap);
        islandGenerator.generateIsland(volume, islandGenerator.position);
        setMap(newMap);
    }
    return (
        <div className="flex gap-4">

            <MapDisplay map={map}/>
            <div>
                <Button onClick={handleNewGeneration} className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded cursor-pointer m-2 bg-center">
                    Generate
                </Button>
                <Slider label="Size" value={volume} setValue={setVolume} min={0} max={9000} step={100}/>

            </div>
            
        </div>
    );

    
}