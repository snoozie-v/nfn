import { Outlet, Link } from "react-router-dom";
import cropped from "../assets/cropped-logo.png"

function Layout() {
  return (
    <>
        <nav className="font-mono">
            <div className="w-full bg-slate-800 items-center flex">

                <div className="2xl:pr-24 xl:pr-12 md:pr-6 sm:pr-4 p-2"></div>
                <img src={cropped} className="w-14"></img>
                <div className="2xl:pr-16 xl:pr-8 md:pr-4 pr-2"></div>
                <div className="text-blue-50 text-sm sm:font-bold sm:text-base md:text-2xl 2xl:text-4xl">Non-Fungible News | VeChainNFTs</div>
            </div>
            <div className="bg-[#1a1a1a] text-blue-50 items-center md-text-xl">
                <ul className="p-2 sm:flex sm:space-x-6 text-sm sm:text-lg lg:text-2xl sm:font-bold ">
                    <li className="hover:underline sm:pl-8">
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:underline'>
                    <Link to="/nfn">NFN Content</Link>
                </li>

                    <li className="hover:underline">
                        <Link to="/twitter">Twitter Spaces</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/discord">Discord Directory</Link>
                    </li>


                {/* <li className='hover:underline'>Newsletter</li> */}
                    <li className='hover:underline'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
        
        <Outlet />
    </>
  )
}

export default Layout
