export default function Footer(){


    return(
        <>
        
        <footer className="relative w-full">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block w-full h-auto">
                <path fill="#000000" fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,165.3C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

            <div className="bg-[#000000] text-white px-10 pb-16 pt-5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                
                <div className="max-w-xs">
                    <p className="text-lg italic leading-relaxed opacity-90">
                    "Every tense tells a story. We help you tell yours accurately."
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold text-xl mb-4 text-sky-400">Address</h4>
                    <p className="opacity-80 leading-relaxed">
                    Jalan Pegangsaan Timur No.5,<br />
                    Kota Surabaya, Jawa Timur
                    </p>
                </div> 
                
                <div>
                    <h4 className="font-bold text-xl mb-4 text-sky-400">Contact</h4>
                    <div className="opacity-80 space-y-2">
                    <p>Email: <span className="hover:text-sky-400 cursor-pointer">yakobusavin2004@gmail.com</span></p>
                    <p>Instagram: <span className="hover:text-sky-400 cursor-pointer">@yakobusavin</span></p>
                    </div>
                </div> 

                </div>
                
                <div className="border-t border-gray-600 mt-12 pt-8 text-center opacity-50 text-sm">
                © {new Date().getFullYear()} JAGOTENSES. All rights reserved.
                </div>
            </div>
        </footer>
        </>
    )
}