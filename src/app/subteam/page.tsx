import Image from "next/image";
import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import PageHeader from "~/components/PageHeader";

function TeamCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const polygon =
    "polygon(10% 0%,100% 0,100% 10%,100% 90%,90% 100%,0 100%,0% 90%,0% 10%";
  return (
    <Link className="group" href={href}>
      <div
        className="relative border-4 bg-gradient-to-br from-zinc-600 via-zinc-500 to-zinc-300 p-8 shadow-lg group-hover:border-yellow-500"
        style={{ clipPath: polygon }}
      >
        {children}
      </div>
    </Link>
  );
}

const team_data = [
  {
    path: "/rejetion",
    icon: "/RJ.png",
    name: "Rejetion",
    divison: "Racing Plane",
    detail:
      "Berkonsentrasi pada misi Fast and On Track yaitu cepat dan tetap pada lintasan secara autonomus dan manual.",
  },
  {
    path: "/thunderwing",
    icon: "/FW.png",
    name: "Thunderwing",
    divison: "Fixedwing",
    detail:
      "Berkonsentrasi pada pengembangan wahana yang difokuskan untuk pelaksanaan misi mapping dan monitoring di area tertentu.",
  },
  {
    path: "/azzawra",
    icon: "/TD.png",
    name: "Az-Zawra Biantara",
    divison: "Technology Development",
    detail:
      "Berkonsentrasi di bidang pengembangan teknologi UAV yang terpecah menjadi 4 tema pengembangan yaitu Airframe Innovation, Propulsion System, Flight Controller Development dan Ground Control Station.",
  },
  {
    path: "/wekudhara",
    icon: "/wekudhara.png",
    name: "Werkudhara",
    divison: "V-TOL",
    detail:
      "Berkonsentrasi pada bidang pengembangan wahana yang berfokus pada suatu misi untuk dropping (menjatuhkan logistik) pada dropzone yang telah ditentukan.",
  },
];

export default function Subteam() {
  return (
    <>
      <PageHeader
        icon={<BiSolidCategory size={72} />}
        title="Subteam"
        subtitle="Dreamagination - Divison"
        description="Dreamagination adalah Tim Robot Terbang Divisi Robotika UKM
              Rekayasa Teknologi UNY yang berfokus kepada riset tentang wahana
              UAV (Unmanned Aerial Vehicle) atau pesawat tanpa awak. Terdiri
              dari 4 divisi dan berdiri sejak tahun 2015 hingga sekarang."
      />

      <div className="bg-zinc-600 bg-[url(/noise.avif)] bg-blend-multiply">
        <div className="container px-4 py-12 lg:px-48">
          <div className="grid gap-16 md:grid-cols-2">
            {team_data.map((team) => (
              <TeamCard href={"/subteam" + team.path} key={team.name}>
                <Image
                  className="drop-shadow-white"
                  src={team.icon}
                  width={96}
                  height={96}
                  alt=""
                />
                <div className="font-header mt-4 text-3xl font-bold uppercase text-zinc-900">
                  {team.name}
                </div>
                <div className="font-header text-xl uppercase text-yellow-500">
                  {team.divison} divison
                </div>
                <div>{team.detail}</div>
              </TeamCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
