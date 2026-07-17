import { useNavigate } from "react-router-dom";
import { MdOutlineExplore, MdBarChart } from "react-icons/md";
import { IoBookOutline, IoExitOutline, IoPerson } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useState } from "react";

const nav_icons = [
  { label: "Descobrir", icon: MdOutlineExplore ,path: "/",},
  { label: "Biblioteca", icon: IoBookOutline ,path: "/biblioteca"},
  { label: "Atividade", icon: MdBarChart ,path: "/atividade"},
  { label: "Comunidade", icon: IoPerson ,path: "/comunidade"},
];

function NavItem ({label , Icon , active , onClick}){
  return (
    <button
     onClick={onClick}
     className= {`flex items-center gap-3 w-full text-left p-2 px-6 my-1 rounded-lg transition-colors duration-200 
                  ${active ? "text-primary bg-primary/10" : "text-neutral-600 hover:text-primary" }`}>
      
      <Icon size={24} />
      <span className="text-sm font-medium">{label}</span>            
    </button>
  );
}


export default function SideBar() {
  const [active , setActive] = useState("Descobrir");
   const navigate = useNavigate();
  return (
    <aside className="flex flex-col top-0 left-0 h-screen fixed w-80 bg-white shadow-2xl">
      <div className="py-10 px-8">
        <h1 className="text-primary  text-3xl font-manrope-manrope">Aura</h1>
        <p translate="no" className="text-sm text-neutral-400">
          Santuário Digital
        </p>
      </div>

      <nav className="flex flex-col px-2" aria-label="Navegação principal">
        {nav_icons.map(({label,icon,path})=>(
          <NavItem
          key={label}
          label={label}
          Icon={icon}
          active={active===label}
           onClick={() => {
           setActive(label);
           navigate(path);
}}
          />
        ))

        }
      </nav>

        <div className="mt-auto px-6 pb-8">
        <button className="w-full bg-primary text-white py-3 rounded-2xl font-medium transition-colors duration-300 hover:bg-primary-hover cursor-pointer">
          Iniciar
        </button>

        <button className="flex items-center gap-3 w-full p-2 mt-6 text-neutral-400 hover:text-neutral-600 transition-colors">
          <IoMdHelpCircleOutline size={24} />
          Ajuda
        </button>
        <button className="flex items-center gap-3 w-full p-2 mt-2 text-neutral-400 hover:text-neutral-600 transition-colors">
          <IoExitOutline size={24} />
          Sair
        </button>
      </div>
    </aside>
  );
}
