import Image from "next/image";
import { PiGooglePhotosLogo } from "react-icons/pi";

export default function Gallery() {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <PiGooglePhotosLogo size={72} />
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Gallery
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Dreamagination - Photo collections
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 bg-[url(/noise.avif)] py-12 bg-blend-multiply">
        <div className="container px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {new Array(8).fill(0).map((v) => (
              <div
                className="z-1 group relative aspect-[4/3] overflow-hidden shadow-lg"
                key={v}
              >
                <div className="relative h-full w-full bg-zinc-100">
                  <Image
                    className="h-auto w-auto scale-110 transition-transform duration-200 ease-in-out group-hover:scale-100"
                    src="/banner.jpg"
                    fill
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 hidden w-full bg-black/70 p-4 group-hover:block">
                  <span className="text-sm font-semibold text-yellow-500">
                    2023
                  </span>
                  <h3 className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
