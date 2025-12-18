export default function Header(){

    return(
        <>  
            <div class="flex bg-[#000000] p-4 justify-between w-full h-full">
                <div class="text-white text-xl font-medium">JAGOTENSES</div>
                <div class="flex gap-4 text-white text-xl font-medium">
                    <div class="hover:bg-white hover:text-black">Lessons</div>
                    <div class="hover:bg-white">About me</div>
                    <div class="hover:bg-white">Contact me</div>
                </div>
            </div>
        </>
    )
}