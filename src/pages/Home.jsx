import Sidebar from "../components/Sidebar";
import DateIndicador from "../components/DateIndicador";
import { PiPlantFill,PiSunDimFill } from "react-icons/pi";
import { FaWater } from "react-icons/fa";
import { MdOutlineSelfImprovement,MdEnergySavingsLeaf,MdOutlineSentimentSatisfied } from "react-icons/md";


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

      <main className="flex flex-col gap-2 py-10 px-12 ml-146 w-full max-w-3xl">
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
              <button key={label}
                 className="flex flex-col items-center  gap-2 py-8 p-11 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-green-100 transition-shadow  duration-300">
                <Icon size={32} className="text-primary" />
                <span className="text-sm font-medium text-neutral-600">{label}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="flex justify-start mt-20 py-40 px-109 rounded-4xl bg-red-700 ">
          jsdj

        </div>

      </main>
    </div>
  );
}