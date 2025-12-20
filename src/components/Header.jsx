export default function Header(){

    return(
        <>  
            <div class="flex bg-[#000000] p-4 justify-between w-full h-full">
                <div class="text-white text-2xl font-medium px-3 py-2">JAGOTENSES</div>
                <div class="flex gap-4 text-white text-xl font-medium">
                    <div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">Lessons</div>
                    <div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">About me</div>
                    <div class="px-3 py-2 hover:bg-white hover:text-black rounded-full duration-100">Contact me</div>
                </div>
            </div>
        </>
    )
}