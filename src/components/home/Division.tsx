import Image from "next/image";
import Link from "next/link";

const divisions = [
  { name: "Racing Plane", icon: "/RJ.png" },
  { name: "Fixedwing", icon: "/FW.png" },
  { name: "Technology Development", icon: "/wekudhara.png" },
  { name: "V-TOL", icon: "/wekudhara.png" },
];

export default function Division() {
  return (
    <div className="mt-16 grid gap-4 gap-y-10 md:grid-cols-2 md:gap-y-6 md:px-12 lg:grid-cols-4">
      {divisions.map((division, idx) => (
        <Link className="group block" href="#" key={division.name}>
          <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-zinc-400/60 bg-gradient-to-tr from-zinc-400 via-zinc-100 to-zinc-200 py-8 text-center group-hover:border-yellow-700/50 group-hover:from-yellow-700 group-hover:via-yellow-100 group-hover:to-yellow-200">
            <Image
              className="mx-auto transition-all delay-100 duration-300 ease-linear group-hover:scale-125"
              src={division.icon}
              width={idx > 1 ? 150 : 100}
              height={100}
              alt=""
            />
            <h3 className="mt-4 text-xl font-semibold uppercase">
              {division.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
