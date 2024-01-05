"use client";

// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "~/components/Logo";
import { MdClose, MdMenu } from "react-icons/md";
import { Contact, Division, Hero, Gallery } from "~/components/home";
// import { useRouter } from "next/navigation";

const header_menu = [
  { name: "Division", path: "/subteam" },
  { name: "Achievement", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <h2 className="heading-line font-header text-center text-4xl font-bold uppercase text-sky-900">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  // const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window) {
      window.onscroll = () => setScrolled(!!window.scrollY);
    }
  }, []);

  return (
    <div className="relative z-0 bg-zinc-400 bg-[url(/noise.avif)] bg-blend-multiply">
      <header
        className={clsx(
          (scrolled || menu) &&
            "border-b border-black/20 bg-white/80 backdrop-blur-lg",
          "fixed left-0 top-0 z-[100] w-full",
        )}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between px-4 py-2 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center justify-between">
            <Link
              href="/"
              title="DREAMAGINATION"
              className={clsx(!scrolled && !menu && "text-white", "h-16")}
            >
              <Logo />
            </Link>
            <button onClick={() => setMenu(!menu)}>
              {menu ? (
                <MdClose size={32} aria-label="Close" />
              ) : (
                <MdMenu
                  className={clsx(!scrolled && "text-white", "lg:hidden")}
                  size={32}
                  aria-label="Menu"
                />
              )}
            </button>
          </div>
          <div
            className={clsx(
              menu ? "mt-4 h-auto border-t border-zinc-600" : "h-0",
              !scrolled && !menu && "text-white",
              "easy-in-out flex flex-col overflow-hidden transition-[height] duration-500 lg:flex lg:h-auto lg:flex-row lg:space-x-6 lg:pt-0",
            )}
          >
            {header_menu.map((menu) => (
              <Link
                href={menu.path}
                key={menu.name}
                className="p-4 font-medium hover:text-yellow-600"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <Hero />

      <div className="container -mt-20 space-y-32 rounded-t-3xl border bg-zinc-200 py-16 shadow-xl">
        <div className="px-4" id="divisons">
          <Heading>
            <span className="text-black">Our</span> divisions
          </Heading>
          <Division />
        </div>

        {/* <div className="px-4" id="articles">
          <Heading>Articles</Heading>
          <div className="mt-16 grid gap-4 gap-y-10 md:grid-cols-2 md:gap-y-6 md:px-12 lg:grid-cols-3">
            {["A", "B", "C"].map((v) => (
              <Link href="/" key={v}>
                <div
                  className="z-1 group relative aspect-[4/3] overflow-hidden"
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
                  <div className="absolute bottom-0 w-full bg-black/70 p-4">
                    <span className="text-sm font-semibold text-yellow-500">
                      Desember 2, 2023
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            className="mx-auto mt-8 block rounded-full bg-yellow-400 px-6 py-2.5 font-semibold uppercase hover:opacity-80"
            onClick={() => router.push("/articles")}
          >
            Browse
          </button>
        </div> */}

        <div className="px-2" id="gallery">
          <Heading>Gallery</Heading>
          <Gallery />
        </div>

        <div className="bg-robot" id="contact">
          <Heading>
            Contact <span className="text-black">Us</span>
          </Heading>
          <Contact />
        </div>
      </div>
    </div>
  );
}
