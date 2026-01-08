export default function TenseCard({title, definition, usage, formula}){
    return(
        <>
            <div className="mt-30">

                <h1 className="text-black font-['Archivo_Black'] text-center text-5xl mt-20 mb-20">{title}</h1>

                <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Definition</h2>
                    <p className="mt-6 text-xl text-justify">{definition}</p>

                </div>

                <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Usage</h2>
                    
                    
                    
                    <ul className="list-disc list-inside space-y-2 text-xl mt-4">
                    {usage.map((usa, index) => (
                        <li key={index}>{usa}</li>
                        ))}
                     </ul>

                </div>


                 <div className="max-w-3xl mx-auto mt-16 p-8 border rounded-3xl">
                    <h2 className="inline-block bg-black text-white px-5 py-1 rounded-full text-2xl">Formula</h2>
                    <ul className="list-disc list-inside space-y-2 text-xl mt-4">
                        <li><b>Positive : </b> {formula.positive}</li>
                        <li><b>Negative : </b>{formula.negative}</li>
                        <li><b>Interrogative : </b>{formula.interrogative}</li>

                    </ul>
                </div>
            </div>
            
            
        </>
    )
}