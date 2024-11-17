import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row bg-black w-full h-auto md:h-auto lg:h-auto p-4">
      <div className="justify-items-center place-content-center">
        <h1 className="text-slate-700 text-3xl md:text-4xl lg:text-5xl font-bold">
          Zoodies Clothing Co.
        </h1>
        <h1 className="text-white font-medium text-xs md:text-sm lg:text-base pt-8 md:pt-12 lg:pt-16">
          Where comfort meets style. Explore our premium hoodies designed to
          keep you cozy and cool, no matter the season.
        </h1>
        <h1 className="text-white font-medium text-sm md:text-base lg:text-lg p-2 md:p-3 lg:p-5">
          Hoodies<span className="border-l mx-2"></span>
          T-Shirts<span className="border-l mx-2"></span>Pants
          <span className="border-l mx-2"></span>Sweatshirts
          <span className="border-l mx-2"></span>Shorts Jackets
        </h1>
        <button className="text-white border text-xs p-1 px-[8px] lg:text-sm rounded-md hover:border-slate-400 hover:text-slate-400">
          VIEW NEW RELEASES
        </button>
      </div>

      <div className="pt-4 place-content-center">
        <Image src="/heroshoody.jpg" alt="/Zoodies" width={700} height={700} />
      </div>
    </div>
  );
}
