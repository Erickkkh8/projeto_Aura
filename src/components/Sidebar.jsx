import { MdOutlineExplore } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="min-h-200 w-80 bg-[#FFFFFF] shadow-2xl">
      <div className="py-10 px-10">
        <h1 className="text-[#9d94be] text-3xl font-manrope-4xl ">Aura</h1>
        <p className="text-sm text-neutral-400">Santuário Digital</p>
      </div>

      <div >
        <p className="flex  gap-2 text-neutral-600 text-lm items-center p-2 m-4"><MdOutlineExplore size={26} /> Descobrir</p>
        <p className="flex  gap-2 text-neutral-600 text-lm items-center p-2 m-4"><IoBookOutline size={26} /> Biblioteca</p>
        <p  className="flex gap-2 text-neutral-600 text-lm items-center p-2 m-4"><MdBarChart size={26} />Atividade</p>
        <p  className="flex gap-2 text-neutral-600 text-lm items-center p-2 m-4"><IoPerson  size={26}/>Comunidade</p>
      </div>
    </div>
  );
}
