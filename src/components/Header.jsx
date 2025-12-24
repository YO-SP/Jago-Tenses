import { Link } from 'react-router-dom'; 

export default function Header(){

    return(
        <>  
            <div class="flex bg-[#000000] p-4 justify-between w-full h-full">
                <Link to="/"><div class="text-white text-2xl font-medium px-3 py-2">JAGOTENSES</div></Link>
                <nav class="flex gap-4 text-white text-xl font-medium">
                    <Link to="/lessons"><div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">Lessons</div></Link>
                    <Link to="/about"><div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">About me</div></Link>
                    <Link to="/contact"><div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">Contact</div></Link>
                </nav>
            </div>
        </>
    )
}
