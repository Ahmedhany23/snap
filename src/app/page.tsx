"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import imagemobile from "@/app/images/image-hero-mobile.png";
import imagedesktop from "@/app/images/image-hero-desktop.png";
import databiz from "@/app/images/client-databiz.svg";
import audiophile from "@/app/images/client-audiophile.svg";
import meet from "@/app/images/client-meet.svg";
import maker from "@/app/images/client-maker.svg";

const data = [
  { image: databiz },
  { image: audiophile },
  { image: meet },
  { image: maker },
];

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <article className="flex flex-col justify-center items-center text-center lg:text-justify gap-14 lg:flex-row-reverse lg:gap-36   lg:py-36">
        <div>
          <Image src={imagemobile} alt="image" className="w-full lg:hidden" />{" "}
          <Image
            src={imagedesktop}
            alt="image"
            className="w-[500px] hidden lg:block"
          />
        </div>
        <div className="lg:w-[500px] lg:flex lg:flex-col lg:gap-8 lg:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold pb-5">Make remote work</h1>
          <p className="text-lg lg:text-xl font-normal text-gray-600 ">
            Get your team in sync, no matter your location. Streamline processe,
            create team rituals, and watch productivity soar.
          </p>
          <button className="  mt-5 text-[#cfcfcf] text-lg  rounded-xl bg-[#151515] py-3 px-5 lg:py-5 lg:px-7 hover:text-[#151515] hover:bg-transparent hover:border hover:border-[#151515] duration-300">
            Learn more
          </button>
          <div className="logos py-14 flex items-center justify-center  gap-3 flex-row lg:gap-10">
            {data.map((d) => {
              return <Image src={d.image} alt="image" key={d.image} className=" w-[80px] lg:w-[110px]"/>;
            })}
          </div>
        </div>
      </article>
    </>
  );
}
