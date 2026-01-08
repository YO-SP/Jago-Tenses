export default function TenseCard({title, definition, usage, formula}){
    return(
        <>
            <div className="mt-30">

                <h1 className="text-black font-['Archivo_Black'] text-center text-5xl mt-20 mb-20">{title}</h1>



                {usage.map((us, index) => (
                <li key={index}>{us}</li>
                ))}


                <p>{formula.positive}</p>
            </div>
            
            
        </>
    )
}