import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from 'react-router-dom'; 
import { tenses } from '../data/tenses.js';

export default function Lessons(){
    return(
        <>
        <Header></Header>

        <h1 class="text-black font-['Archivo_Black'] text-center text-5xl mt-20 mb-20">What do you want to learn today?</h1>        

        <div className="flex justify-center mt-12">
        <div className="grid grid-cols-4 gap-6">
          {tenses.map((tense) => (
            <Link key={tense.id} to={`/lessons/${tense.id}`}>
              <div className="border border-black rounded-xl p-6 hover:bg-amber-200 hover:text-black duration-200">
                <h2 className="font-['Archivo_Black'] text-xl">
                  {tense.title}
                </h2>
                <p className="mt-2">{tense.description}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>

        <Footer></Footer>
        </>
    )
}
