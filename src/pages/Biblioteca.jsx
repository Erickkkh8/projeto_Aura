import SideBar from "../components/Sidebar";
import Fechamento from "../components/Fechamento";
import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { RiFocusLine } from "react-icons/ri";
import { MdAir } from "react-icons/md";
import { IoMdFlame } from "react-icons/io";

export default function Biblioteca() {

  const [audios, setAudios] = useState([]);

  useEffect(() => {
    async function carregarAudios() {
      const res = await fetch("http://localhost:3000/audios");
      const data = await res.json();
      console.log(data);
      setAudios(data);
    }
    carregarAudios();
  }, []);

   console.log(audios);
  return (
    <>
      <SideBar />
      <div className="flex-1 flex-col py-15 px-25 ml-126">
        <header className="space-y-4">
          <h1 className="text-primary text-3xl font-bold ">Biblioteca</h1>
          <p className="mt-4 text-neutral-600">
            Encontre a serenidade perfeita para o seu momento.
            <br /> Explore categorias curadas para restaurar seu equilíbrio.
          </p>
        </header>
        <section className="flex  mt-20 gap-4">
          <div className="flex flex-col items-start justify-end bg-blue-100 h-50 w-54 rounded-3xl p-8">
            <RiFocusLine  className=" text-3xl text-neutral-500 mb-18  " />
            <h1 className="flex text-lg font-semibold ">Foco</h1>
            <p className="flex text-xs text-neutral-500">
              8 sessôes * relaxamento
            </p>
          </div>
          <div className="bg-green-100 lex flex-col items-start justify-end h-50 w-54 rounded-3xl p-8">
            <FaRegMoon className="text-2xl text-neutral-500 mb-18 " />
            <h1 className="flex text-lg font-semibold ">Sono</h1>
            <p className="flex text-xs text-neutral-500">
              15 sessôes * relaxamento
            </p>
          </div>
          <div className="bg-neutral-300 lex flex-col items-start justify-end h-50 w-54 rounded-3xl p-8">
            <MdAir className="text-2xl text-neutral-500 mb-18 " />
            <h1 className="flex text-lg font-semibold ">Ansiedade</h1>
            <p className="flex text-xs text-neutral-500">
              12 sessôes * relaxamento
            </p>
          </div>
          <div className="bg-red-100 lex flex-col items-start justify-end h-50 w-54 rounded-3xl p-8">
            <IoMdFlame className="text-2xl text-neutral-500 mb-18 " />
            <h1 className="flex text-lg font-semibold ">Estresse</h1>
            <p className="flex text-xs text-neutral-500">
              12 sessôes * relaxamento
            </p>
          </div>
        </section>
        <h1 className="mt-10 text-2xl ">Sessões Recentes </h1>
        <p className="text-sm text-neutral-500">continue de onde você parou</p>

        {audios.map((audio) => (
          <div
            key={audio._id}
            className="mt-4 flex items-center gap-6 p-4 rounded-3xl w-full max-w-4xl"
          >
            <img
              src={audio.imagem}
              alt={audio.titulo}
              className="w-24 h-24 rounded-xl"
            />

            <div className="flex-1">
              <h2>{audio.titulo}</h2>
            </div>

            <audio controls className="w-full mt-2">
              <source
                src={`http://localhost:3000/uploads/${audio.arquivoUrl}`}
                type="audio/mpeg"
              />
            </audio>
          </div>
        ))}

      </div>
      <Fechamento />
    </>
  );
}
