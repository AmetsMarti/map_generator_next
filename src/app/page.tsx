"use client";
import MapConfigurator from './mapConfigurator';
import Selector from './components/Selector';

export default function Home() {
var selectedValue = "Cellular automata";
  return (
    <div className=" bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex flex-col items-center justify-center w-full py-4">
        <h1 className="text-2xl font-bold tracking-tight text-black font-mono">Terrain Grid Generator</h1>
        <Selector
          options={["Cellular automata", "Random Walk Map"]}
          onChange={(selectedOption) => {
        console.log(`Selected ${selectedOption}`);
        selectedValue = selectedOption;
          }}
        />
      </div>
        <div className="flex rounded-lg shadow-lg bg-white border-1 border-gray-200 ">
         
          <MapConfigurator />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}


