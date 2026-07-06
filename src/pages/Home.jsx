import Sidebar from "../components/Sidebar";
import DateIndicador from "../components/DateIndicador";
import { PiPlantFill,PiSunDimFill } from "react-icons/pi";
import { FaWater } from "react-icons/fa";
import {MdPlayArrow, MdOutlineSelfImprovement,MdEnergySavingsLeaf,MdOutlineSentimentSatisfied } from "react-icons/md";


const home_icon = [
  {label : "calmo", icon:PiPlantFill },
  {label : "radiante", icon:PiSunDimFill },
  {label : "pacifico", icon:FaWater },
  {label : "focado", icon:MdOutlineSelfImprovement },
  {label : "castigo", icon:MdEnergySavingsLeaf },
  {label : "feliz", icon:MdOutlineSentimentSatisfied },
]

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 flex-col py-10 px-12 ml-146 ">
        <div className="max-w-[980px] w-full">

        <h1 className="text-5xl text-primary font-bold">
          Bom dia
        </h1>
        <DateIndicador />
        <p className="text-neutral-600 text-lg mt-2">
          Sua jornada para a serenidade continua hoje. Como você se sente agora?
        </p>

        <section>
          <div className="flex justify-start gap-4 mt-12">
            {home_icon.map(({label,icon : Icon})=>(
              <button 
              key={label}
              type="button"
              className="flex flex-col items-center  gap-2 py-8 px-11 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-green-100 transition-shadow duration-300"
              >
              <Icon size={32} className="text-primary" />
              <span className="text-sm font-medium text-neutral-600">{label}</span>
              </button>
            ))}
          </div>
        </section>

      <div className="flex relative flex-col justify-start items-start gap-4 mt-20 min-h-[420px] md:px-10 w-[870px] md:py-14 bg-[url('/mount.png')] bg-cover bg-center rounded-[2rem] overflow-hidden ">
         <div className="flex absolute left-10 top-14 gap-4 flex-col justify-center">
          <span className="bg-neutral-100/50 text-neutral-600 text-center rounded-3xl w-fit px-4 py-1">Apresentando</span>
          <h1 className="text-3xl md:text-4xl mt-5 text-white font-medium max-w-md">Despertar Dos Sentidos</h1>
         
         
         
          <button 
          type="button"
          className="flex bg-white items-center mt-10 gap-2 h-15 w-[240px] md:px-12 py-2 rounded-full cursor-pointer hover:bg-primary transition-colors duration-300
          ">
            <MdPlayArrow size={28} />
            Iniciar Sessão
            
            </button>
         </div>
        

         
      </div>
          
      <h1 className="text-primary overflow-hidden mt-10 text-3xl font-bold"> Recomendado para você</h1>
          <div className="flex flex-row gap-4 max-w-full mt-6 ">
    
              <img 
              className="h-50 w-70 object-cover  rounded-3xl transition-transform  hover:scale-110 duration-300"
              src="folha.png"
               alt="" />
            
            <img 
              className="h-50 w-70 object-cover rounded-3xl transition-transform  hover:scale-110 duration-300"
              src="luzes.png"
               alt="" />
            
            <img 
              className="h-50 w-70 object-cover rounded-3xl transition-transform  hover:scale-110 duration-300"
              src="folha.png"
               alt="" />
            
            </div>

      </div>
      </main>
    </div>
  );
}