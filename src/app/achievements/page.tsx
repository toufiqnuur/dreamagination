import { GiLaurelsTrophy } from "react-icons/gi";

export default function Achievements() {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <GiLaurelsTrophy size={72} />
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Achievements
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Dreamagination - Aerialroboticteam
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 bg-[url(/noise.avif)] py-12 bg-blend-multiply">
        <div className="container space-y-8 border border-zinc-500 p-4 backdrop-blur-sm lg:rounded-3xl lg:p-8">
          <div>
            <h2 className="font-header text-5xl font-semibold text-zinc-400">
              2023
            </h2>
            <ul className="relative mt-2 space-y-2 border-s border-zinc-700">
              {new Array(6).fill(0).map((v) => (
                <li className="ms-4" key={v}>
                  <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-700 bg-yellow-600"></div>
                  <h3 className="text-lg font-semibold text-white">Juara I</h3>
                  <p className="mb-4 text-base font-normal text-gray-300">
                    divisi Technology Development kategori Flight Controller
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-header text-5xl font-semibold text-zinc-400">
              2022
            </h2>
            <ul className="relative mt-2 space-y-2 border-s border-zinc-700">
              {new Array(6).fill(0).map((v) => (
                <li className="ms-4" key={v}>
                  <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-700 bg-yellow-600"></div>
                  <h3 className="text-lg font-semibold text-white">Juara I</h3>
                  <p className="mb-4 text-base font-normal text-gray-300">
                    divisi Technology Development kategori Flight Controller
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
