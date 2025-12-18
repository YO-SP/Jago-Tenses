import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


export default function Homepage(){

    return(
        <div class="flex flex-col min-h-screen">
            <Header></Header>


            <div class="bg-[#ffffff] grow text-[#000000]">  
                <div class="flex flex-col">
                    <div class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">
                        <h1>Say Goodbye to Complicated Formulas.</h1>
                        <h1>Tenses Simplified for Everyone.</h1>
                    </div>

                    <div>
                        <p class="text-center pt-9 text-2xl">
                        Stop memorizing and start understanding. Our interactive approach breaks 
                        down complex grammar into logical patterns that anyone can master in minutes.
                        </p>
                    </div>

                   <button class="bg-black border border-transparent hover:bg-white hover:text-black hover:border-black text-white font-bold py-2 px-4 rounded-full self-center mt-9">
                            Get Started
                    </button>

                    <img class="flex justify-self-center h-90 my-20" src="src\assets\grad.svg"></img>
                </div>
            </div>

            <div>
                <h2 class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">Learn, Understand, Practice.</h2>

                <div class="flex justify-between mx-60 my-15 gap-45">
                    <div>
                        <img class="" src="src/assets/formula.svg"></img>
                        <h2 class="font-['Archivo_Black'] text-center">Smart Formulas</h2>
                        <p>Visualize the structure of every tense without the overwhelm.</p>
                    </div>

                    <div>
                        <img src="src/assets/guide.svg"></img>
                         <h2 class="font-['Archivo_Black'] text-center">Usage Guides</h2>
                        <p>Visualize the structure of every tense without the overwhelm.</p>
                    </div>

                    <div>
                        <img src="src/assets/Quiz.svg"></img>
                         <h2 class="font-['Archivo_Black'] text-center">Interactive Quizzes</h2>
                        <p>Visualize the structure of every tense without the overwhelm.</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}