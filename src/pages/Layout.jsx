import { Outlet, Link } from "react-router-dom";
import {cropped} from "../assets"

function Layout() {
  return (
    <>
        <nav className="font-mono">
            <div className="w-full bg-slate-800 items-center flex">

                <div className="pr-24"></div>
                <img src={cropped} className="w-[78px] h-[78px]"></img>
                <div className="pr-16"></div>
                <div className="justify-center text-blue-50 text-2xl font-bold">Non-Fungible News | VeChainNFTs</div>
            </div>
            <div className="bg-[#1a1a1a] text-blue-50 items-center">
                <ul className="flex space-x-6 font-bold py-4">
                    <li className="pl-16 hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/twitter">Twitter Spaces</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/discord">Discord Directory</Link>
                    </li>
                {/* <li className='hover:underline'>NFN Content</li> */}
                {/* <li className='hover:underline'>Newsletter</li> */}
                    <li className='hover:underline'>
                        <Link to="/about">About</Link>
                    </li>
                    {/* <li className='hover:underline'>
                        <Link to="contact">Contact</Link>
                    </li> */}
                </ul>
            </div>

        </nav>
        
        <Outlet />
    </>
  )
}

export default Layout
