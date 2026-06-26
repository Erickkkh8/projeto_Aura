import { MdOutlineExplore } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="flex flex-col min-h-screen fixed w-80 bg-[#FFFFFF] shadow-2xl">
      <div className="py-10 px-8">
        <h1 className="text-[#9d94be]  text-3xl font-manrope-4xl ">Aura</h1>
        <p translate="no" className="text-sm text-neutral-400">
          Santuário Digital
        </p>
      </div>

      <div className="cursor-pointer">
        <p className="flex  gap-2 text-neutral-600 text-lm items-center p-2 px-6 my-4 hover:text-[#9d94be] ">
          <MdOutlineExplore size={26} /> Descobrir
        </p>
        <p className="flex  gap-2 text-neutral-600 text-lm items-center p-2 px-6 my-4 hover:text-[#9d94be] ">
          <IoBookOutline size={26} /> Biblioteca
        </p>
        <p className="flex gap-2 text-neutral-600 text-lm items-center p-2 px-6 my-4 hover:text-[#9d94be] ">
          <MdBarChart size={26} />
          Atividade
        </p>
        <p className="flex gap-2 text-neutral-600 text-lm items-center p-2 px-6 my-4 hover:text-[#9d94be] ">
          <IoPerson size={26} />
          Comunidade
        </p>

        <button className="bg-[#7c739e] text-white p-3 px-15 mx-12 mt-65 rounded-2xl cursor-pointer duration-300  hover:bg-[#9d94be] ">
          {" "}
          Iniciar{" "}
        </button>

        <span className="flex items-center p-2 px-6 mt-6 text-neutral-400 ">
          <IoMdHelpCircleOutline size={26} />
          Ajuda
        </span>
        <span className="flex items-center p-2 px-6 mt-4 text-neutral-400  ">
          <IoExitOutline size={26} />
          Sair
        </span>
      </div>
    </div>
  );
}
