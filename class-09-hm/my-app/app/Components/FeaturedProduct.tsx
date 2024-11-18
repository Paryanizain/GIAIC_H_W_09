import Image from "next/image";
const FeaturedProduct = () => {
  return (
    <div className="dark:bg-zinc-900 bg-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 py-20 gap-6 md:gap-10">
        <div className="bg-white justify-items-center p-6">
          <Image className="hover:opacity-90 transition duration-300"
            src="/hoody1.webp"
            alt="/Zoodies Browny"
            width={300}
            height={300}
          />
          <div className="text-black md:text-sm lg:text-base font-semibold md:font-medium lg:font-semibold hover:text-slate-400">
            Zoodies Browny
          </div>
          <div className="text-black text-sm md:text-sm font-semibold md:font-medium my-1 hover:text-slate-400">
            PKR-2499/=
          </div>
          <button className="bg-blue-600 text-sm md:text-sm font-semibold md:font-medium p-[2px] px-[8px] rounded-md hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="bg-white justify-items-center p-6">
          <Image className="hover:opacity-90 transition duration-300"
            src="/hoody22.jpg"
            alt="/Zoodies Zen"
            width={300}
            height={300}
          />
          <div className="text-black md:text-sm  lg:text-base font-semibold md:font-medium lg:font-semibold hover:text-slate-400">
            Zoodies Zen
          </div>
          <div className="text-black text-sm md:text-sm font-semibold md:font-medium my-1 hover:text-slate-400">
            PKR-2999/=
          </div>
          <button className="bg-blue-600 text-sm md:text-sm font-semibold md:font-medium p-[2px] px-[8px] rounded-md hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="bg-white justify-items-center p-6">
          <Image className="hover:opacity-90 transition duration-300"
            src="/hoody3.webp"
            alt="/Zoodies Voyager"
            width={300}
            height={300}
          />
          <div className="text-black md:text-sm  lg:text-base font-semibold md:font-medium lg:font-semibold hover:text-slate-400">
            Zoodies Voyager
          </div>
          <div className="text-black text-sm md:text-sm font-semibold md:font-medium my-1 hover:text-slate-400">
            PKR-2399/=
          </div>
          <button className="bg-blue-600 text-sm md:text-sm font-semibold md:font-medium p-[2px] px-[8px] rounded-md hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="bg-white justify-items-center p-6">
          <Image className="hover:opacity-90 transition duration-300"
            src="/hoody44.jpg"
            alt="/Zoodies Whity"
            width={300}
            height={300}
          />
          <div className="text-black md:text-sm  lg:text-base font-semibold md:font-medium lg:font-semibold hover:text-slate-400">
            Zoodies whity
          </div>
          <div className="text-black text-sm md:text-sm font-semibold md:font-medium my-1 hover:text-slate-400">
            PKR-2199/=
          </div>
          <button className="bg-blue-600 text-sm md:text-sm font-semibold md:font-medium p-[2px] px-[8px] rounded-md hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
