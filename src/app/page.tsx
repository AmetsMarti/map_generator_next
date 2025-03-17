import Image from "next/image";
import MapDisplay from './mapDisplay';
import Selector from './selector';
import Button from './components/Button';

export default function Home() {
  return (
    <div className=" bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex rounded-lg shadow-lg bg-white border-1 border-gray-200 ">
          <Selector />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}


