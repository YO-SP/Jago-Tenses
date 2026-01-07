import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutMe(){
    return(
        <>
          <Header></Header>
          
          <h1 class="text-black font-['Archivo_Black'] text-center text-5xl mt-15">About Me</h1>

          <div class="flex justify-center gap-15 mt-20 ml-55">
            <img class="w-50 h-50 mr-5" src="src/assets/Frame 4.svg" />
            
            <div class="flex flex-col">
              <p class="mr-80 text-2xl w-150 text-justify">I am an Informatics Engineering student and a relentless problem-solver on a mission to become a high-impact Fullstack Developer. Currently, I’m deep-diving into the MERN Stack to build seamless digital experiences, while simultaneously venturing into the future of the web through Blockchain and Solidity.</p>
              <br></br>
              <p class="mr-80 text-2xl w-150 text-justify">Driven by curiosity and a global mindset, I’m constantly refining my craft and my English proficiency to bridge the gap between complex code and real-world solutions. I don't just write code; I build the tools of tomorrow."</p>
            </div>
          </div>
            
    

          
          <Footer></Footer>
        </>
    )
}