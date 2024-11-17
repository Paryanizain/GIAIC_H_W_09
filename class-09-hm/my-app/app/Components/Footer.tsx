import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="flex justify-center">
        <h1 className=" uppercase text-white font-bold md:text-2xl text-xl mt-28">
          where to?
        </h1>
      </div>
      <ul className="text-white font-semibold text-sm md:text-base flex justify-center space-x-10 mt-6">
        <li className="hover:text-slate-400">Outside</li>
        <li className="hover:text-slate-400">Location</li>
        <li className="hover:text-slate-400">Video</li>
        <li className="hover:text-slate-400">Team</li>
        <li className="hover:text-slate-400">Enquire</li>
      </ul>
      <div className="text-white flex justify-between items-center mt-48 md:p-10 p-6">
        <div className="md:font-semibold md:text-sm text-xs">
          Branding and Marketing by
          <span className="uppercase md:font-bold font-semibold md:text-xl text-base">
            {" "}
            zain shahid
          </span>
        </div>
        <div className="text-sm font-semibold">
          Check Out
          <Link
            href="https://www.linkedin.com/in/paryai-zain-8a24352a5/"
            className="font-bold uppercase mx-1 hover:text-slate-400"
          >
            @zain shahid
          </Link>
        </div>
      </div>
    </div>
  );
}
