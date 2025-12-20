import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Homepage() {
  return (
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
              Stop memorizing and start understanding. Our interactive approach
              breaks <br></br>
              down complex grammar into logical patterns that anyone can master
              in minutes.
            </p>
          </div>

          <button class="transition duration-200 ease-in-out transform hover:scale-110 hover:bg-black bg-black text-white font-bold py-2 px-4 rounded-full self-center mt-9">
            <p class="text-xl">Get Started</p>
          </button>

          <p class="text-center pt-9 text-2xl">
            Built for learners who hate grammar rules.
          </p>

          <img
            class="flex justify-self-center h-110 my-15"
            src="src\assets\grad.svg"
          ></img>
        </div>
      </div>

      <div class="bg-[#ffffff] grow text-[#000000]">
        <div class="flex flex-col">
          <div class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">
            <h1>Why JAGOTENSES ?</h1>
          </div>

          <div class="flex justify-center">
            <div class="flex flex-col">
              <div class="flex mt-20">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105">
                  <img class="w-15 h-15" src="src/assets/one.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      No memorization
                    </h2>
                    <p class="text-2xl">
                      Learn patterns instead of memorizing formulas.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mt-15 ">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105">
                  <img class="w-15 h-15" src="src/assets/two.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      Pattern-based understanding
                    </h2>
                    <p class="text-2xl">
                      See how tenses work logically across contexts.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mt-15">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105">
                  <img class="w-15 h-15" src="src/assets/three.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      Real usage, not theory
                    </h2>
                    <p class="text-2xl">
                      Practice with examples people actually use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div>
        <h2 class="text-black font-['Archivo_Black'] text-center text-5xl mt-50">
          Learn, Understand, Practice.
        </h2>

        <div class="flex justify-between mx-70 gap-45 my-21">
          <div class="border-3 border-transparent hover:border-black rounded-4xl p-6 transition-colors duration-250 hover:bg-amber-200">
            <img class="ml-9 py-8 pr-16" src="src/assets/formula.svg"></img>
            <h2 class="font-['Archivo_Black'] text-center text-2xl">
              Smart Formulas
            </h2>
            <p class="text-center text-2xl">
              Visualize the structure of every tense without the overwhelm.
            </p>
          </div>

          <div class="border-3 border-transparent hover:border-black rounded-4xl p-6 transition-colors duration-250 hover:bg-amber-200">
            <img class="ml-9 py-8 pr-16" src="src/assets/guide.svg"></img>
            <h2 class="font-['Archivo_Black'] text-center text-2xl">
              Usage Guides
            </h2>
            <p class="text-center text-2xl">
              Learn exactly when and how to use them in real conversations.
            </p>
          </div>

          <div class="border-3 border-transparent hover:border-black rounded-4xl p-6 transition-colors duration-250 hover:bg-amber-200">
            <img class="ml-9 py-8 pr-16" src="src/assets/Quiz.svg"></img>
            <h2 class="font-['Archivo_Black'] text-center text-2xl">
              Interactive Quizzes
            </h2>
            <p class="text-center text-2xl">
              Put your knowledge to the test and track your progress instantly.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#ffffff] grow text-[#000000]">
        <div class="flex flex-col">
          <div class="text-black font-['Archivo_Black'] text-center text-5xl pt-25">
            <h1>HOW IT WORKS?</h1>
          </div>

          <div class="flex justify-center">
            <div class="flex flex-col">
              <div class="flex mt-20 ml-7 transition duration-200 ease-in-out transform hover:scale-105">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl">
                  <img class="w-15 h-15" src="src/assets/one.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      Choose a tense
                    </h2>
                    <p class="text-2xl">
                      Start by selecting the tense you want to learn. No overwhelm, just focus on one pattern at a time.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mt-15 ml-7 transition duration-200 ease-in-out transform hover:scale-105">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl">
                  <img class="w-15 h-15" src="src/assets/two.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      See the pattern
                    </h2>
                    <p class="text-2xl">
                      Understand how the tense works through clear structures, not confusing formulas.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mt-15 ml-7 transition duration-200 ease-in-out transform hover:scale-105">
                <div class="inline-flex items-center bg-amber-200 px-8 py-6 rounded-xl">
                  <img class="w-15 h-15" src="src/assets/three.svg" />

                  <div class="ml-10">
                    <h2 class="font-['Archivo_Black'] text-2xl">
                      Practice with real examples
                    </h2>
                    <p class="text-2xl">
                      Apply what you learn using examples from real-life conversations, not textbook sentences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-35">
        <img src="src/assets/journey.svg"></img>
        <div class="flex flex-col mt-30">
          <h1 class="text-3xl">Ready to start your journey with tenses?</h1>
          <button class="transition duration-200 ease-in-out transform hover:scale-110 hover:bg-black bg-black text-white font-bold py-2 px-4 rounded-full self-center mt-9">
            Start Your Journey
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
