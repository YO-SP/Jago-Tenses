import { Link } from 'react-router-dom'; 

export default function Header(){

    return(
        <>  
            <div class="flex bg-[#ffffff] p-4 justify-between w-full h-full">
                <Link to="/"><div class="text-black text-2xl font-medium px-3 py-2">JAGOTENSES</div></Link>
                <nav class="flex gap-4 text-black text-xl font-medium">
                    <Link to="/lessons"><div class="px-3 py-2 hover:bg-black hover:text-white rounded-full duration-100">Lessons</div></Link>
                    <Link to="/about"><div class="px-3 py-2 hover:bg-black hover:text-white rounded-full duration-100">About me</div></Link>
                    <Link to="/contact"><div class="px-3 py-2 hover:bg-black hover:text-white rounded-full duration-100">Contact</div></Link>
                </nav>
            </div>

            <hr class="border-2 border-gray-300 "></hr>
        </>
    )
}
