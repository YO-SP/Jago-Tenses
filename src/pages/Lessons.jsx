import { Link } from 'react-router-dom'; 
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { tenses } from "../data/tenses.js";

export default function Lessons() {
  const [openTime, setOpenTime] = useState(null);
  const times = ["past", "present", "future"];

  return (
    <>
      <Header />

      <h1 className="text-black font-['Archivo_Black'] text-center text-5xl mt-20 mb-20">
        What do you want to learn today?
      </h1>

      <div className="flex justify-center gap-12 mb-10 items-start min-h-105">
        {times.map((time) => {
          const isOpen = openTime === time;

          return (
            <div
              key={time}
              className="bg-amber-200 text-black rounded-xl px-3 py-2 w-80 border border-transparent hover:border-black hover:border-2"
            >
              <button
                onClick={() => setOpenTime(isOpen ? null : time)}
                className="w-full text-3xl font-['Archivo_Black'] text-center"
              >
                {time.toUpperCase()}
              </button>

                
              <div
                className={`
                  mt-6 overflow-hidden transition-all duration-400 ease-out
                  ${
                    isOpen
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }
                `}
              >
                <div className="space-y-2">
                  {tenses
                    .filter((t) => t.time === time)
                    .map((t) => (

                  
                  <div className="py-2 text-center border border-black  text-lg cursor-pointer hover:opacity-80 hover:bg-black hover:text-yellow-200 px-2 rounded-xl">
                    <Link key={t.id} to={`/lessons/${t.id}`}>
                      {t.title}
                    </Link>
                  </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer/>
    </>
  );
}

