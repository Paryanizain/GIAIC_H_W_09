import Image from "next/image"
export default function Nav(){
    return(
        <div className="flex justify-between dark:bg-black bg-white md:px-4 lg:px-8 items-center">
            
            <Image className="hidden dark:block" src="/zoodieslogo01.png" alt="/Zoodies" width={200} height={200} />
            <Image className="dark:hidden" src="/zoodieslogo02.png" alt="/Zoodies" width={200} height={200} />

            
            <ul className="hidden md:flex md:space-x-8 lg:space-x-20 text-xs lg:text-sm dark:text-white text-black font-semibold">
                <li  className="hover:text-slate-400">Hoodies</li>
                <li className="hover:text-slate-400">T-Shirts</li>
                <li className="hover:text-slate-400">Jackets</li>
                <li className="hover:text-slate-400">Jackets</li>
            </ul>
            <ul className="hidden md:flex md:flex-row gap-3 md:gap-0 lg:space-x-6 space-x-2 text-xs lg:text-base md:text-sm font-semibold text-black dark:text-white">
                <li className="hover:text-slate-400">About</li>
                <li className="hover:text-slate-400">Contact Us</li>
            </ul>
            <div className="dark:text-white text-black md:hidden">
                <a className="text-5xl px-12" href="#">&#8801;</a>
            </div>
        </div>
    )
}