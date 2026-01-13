import leftArrow from '../assets/left.svg'; 
import { Link } from "react-router-dom";


export default function TenseCard({title, definition, usage, formula, example}){
    return(
        <>
            <div className="mt-30">
                
                <div className="relative mt-20 mb-20">
                    

                    <Link to="/lessons" className="text-black text-2xl font-medium">
                        <img src={leftArrow} alt="back" className="w-12 h-12 cursor-pointer hover:opacity-70 transition-opacity absolute left-1/2 -translate-x-100"></img>
                    </Link>

                    <h1 className="text-black font-['Archivo_Black'] text-5xl text-center">{title}</h1>
                </div>


                <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl bg-amber-200 transition duration-200 ease-in-out transform hover:scale-102 shadow-xl hover:shadow-xl/60">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Definition</h2>
                    <p className="mt-6 text-xl text-justify">{definition}</p>

                </div>

                <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl bg-amber-200 transition duration-200 ease-in-out transform hover:scale-102 shadow-xl hover:shadow-xl/60">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Usage</h2>
                    
                    
                    
                    <ul className="list-disc list-inside space-y-2 text-xl mt-4">
                    {usage.map((usa, index) => (
                        <li key={index}>{usa}</li>
                        ))}
                     </ul>

                </div>


                 <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl bg-amber-200 transition duration-200 ease-in-out transform hover:scale-102 shadow-xl hover:shadow-xl/60">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Formula</h2>
                    <ul className="list-disc list-inside space-y-2 text-xl mt-4">
                        <li><b>Positive : </b> {formula.positive}</li>
                        <li><b>Negative : </b>{formula.negative}</li>
                        <li><b>Interrogative : </b>{formula.interrogative}</li>

                    </ul>
                </div>

                  <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl bg-amber-200 transition duration-200 ease-in-out transform hover:scale-102 shadow-xl hover:shadow-xl/60">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Example</h2>
                    <ul className="list-disc list-inside space-y-2 text-xl mt-4">
                        <li><b>Positive : </b> {example.positive}</li>
                        <li><b>Negative : </b>{example.negative}</li>
                        <li><b>Interrogative : </b>{example.interrogative}</li>
                    </ul>
                </div>
            </div>
            
            
        </>
    )
}