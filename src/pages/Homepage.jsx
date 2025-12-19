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
                        Stop memorizing and start understanding. Our interactive approach breaks <br></br>
                        down complex grammar into logical patterns that anyone can master in minutes.
                        </p>
                        
                    </div>

                    <button class="transition duration-200 ease-in-out transform hover:scale-110 hover:bg-black bg-black text-white font-bold py-2 px-4 rounded-full self-center mt-9">
                        Get Started
                    </button>

                    <p class="text-center pt-9 text-2xl">Built for learners who hate grammar rules.</p>

                    <img class="flex justify-self-center h-90 my-15" src="src\assets\grad.svg"></img>
                </div>
            </div>

            <div class="bg-[#ffffff] grow text-[#000000] ">
                <div class="flex flex-col">
                    <div class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">
                        <h1>Why JAGOTENSES ?</h1>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex justify-center mt-20 ml-7">
                            <img class="w-15 h-15" src="src/assets/one.svg"></img>

                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">No memorization <br></br></h2>
                                <p>Learn patterns instead of memorizing formulas.</p>
                            </div>          
                        </div>
                        
                        <div class="flex justify-center mt-15 ml-40">
                            <img class="w-15 h-15" src="src/assets/two.svg"></img>
                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">Pattern-based understanding<br></br></h2>
                                <p>See how tenses work logically across contexts.</p>
                            </div>          
                        </div>

                        <div class="flex justify-center mt-15">
                            <img class="w-15 h-15" src="src/assets/three.svg"></img>
                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">Real usage, not theory<br></br></h2>
                                <p>Practice with examples people actually use.</p>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-black font-['Archivo_Black'] text-center text-5xl mt-50">Learn, Understand, Practice.</h2>

                <div class="flex justify-between mx-60 gap-45 my-21">
                    <div>
                        <img class="" src="src/assets/formula.svg"></img>
                        <h2 class="font-['Archivo_Black'] text-center">Smart Formulas</h2>
                        <p class="text-center">Visualize the structure of every tense without the overwhelm.</p>
                    </div>

                    <div>
                        <img src="src/assets/guide.svg"></img>
                         <h2 class="font-['Archivo_Black'] text-center">Usage Guides</h2>
                        <p class="text-center">Learn exactly when and how to use them in real conversations.</p>
                    </div>

                    <div>
                        <img src="src/assets/Quiz.svg"></img>
                         <h2 class="font-['Archivo_Black'] text-center">Interactive Quizzes</h2>
                        <p class="text-center">Put your knowledge to the test and track your progress instantly.</p>
                    </div>
                </div>
            </div>

            <div class="bg-[#ffffff] grow text-[#000000] my-10">
                <div class="flex flex-col">
                    <div class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">
                        <h1>HOW IT WORKS</h1>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex justify-center mt-20 ml-7">
                            <img class="w-15 h-15" src="src/assets/one.svg"></img>

                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">Choose a tense<br></br></h2>
                                <p>Learn patterns instead of memorizing formulas.</p>
                            </div>          
                        </div>
                        
                        <div class="flex justify-center mt-15 ml-25">
                            <img class="w-15 h-15" src="src/assets/two.svg"></img>
                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">See the pattern<br></br></h2>
                                <p>See how tenses work logically across contexts.</p>
                            </div>          
                        </div>

                        <div class="flex justify-center mt-15 ml-15">
                            <img class="w-15 h-15" src="src/assets/three.svg"></img>
                            <div class="ml-10">
                                <h2 class="font-['Archivo_Black'] text-2xl">Practice with real examples<br></br></h2>
                                <p>Practice with examples people actually use.</p>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>

            



            <Footer></Footer>
        </div>
    )
}