import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

export default function Navbar() {
    const [search, setSearch] = useState("");
    
    return (
        <nav className='py-4 px-3 bg-black flex flex-row justify-between'>
            <h2>
                <Link to="/" className='flex'>
                    <BiCameraMovie className="m-1 text-2xl text-purple-600"/>
                    <p className='text-2xl font-bold text-purple-600'>Tv Show Lib</p>
                </Link>
            </h2>
            <form className="flex items-center">
                <input 
                    type="text"
                    className="rounded-md px-2 py-1 mr-[.3rem] text-black"
                    placeholder="Pesquisar..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}/>
                <button className="border-2 border-purple-600 p-1 bg-purple-600 items-center rounded-md text-black transition-[.4s] hover:bg-transparent hover:text-purple-600" type="submit">
                    <BiSearchAlt2 className="text-[1.4rem]"/>
                </button>
            </form>
        </nav>
    )
}