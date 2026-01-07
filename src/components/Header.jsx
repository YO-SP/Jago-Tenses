import { NavLink, Link } from 'react-router-dom'; 

export default function Header() {
    
    const navLinkStyle = ({ isActive }) => 
        `px-3 py-2 rounded-full duration-100 ${
            isActive 
            ? 'bg-black text-white' 
            : 'hover:bg-black hover:text-white text-black'
        }`;

    return (
        <>  
            <div className="flex bg-[#ffffff] p-4 justify-between w-full h-full">
                <Link to="/">
                    <div className="text-black text-2xl font-medium px-3 py-2">JAGOTENSES</div>
                </Link>
                
                <nav className="flex gap-4 text-xl font-medium">
                    <NavLink to="/lessons" className={navLinkStyle}>
                        Lessons
                    </NavLink>
                    
                    <NavLink to="/about" className={navLinkStyle}>
                        About me
                    </NavLink>
                    
                    <NavLink to="/contact" className={navLinkStyle}>
                        Contact
                    </NavLink>
                </nav>
            </div>

            <hr className="border-t-2 border-gray-300" />
        </>
    );
}