export default function Fechamento({
  titulo = "Aura",
  descricao = "2026 Aura Projeto Iniciante",
}) {
  return (
    <footer className="bg-white h-40 flex items-center pl-150">
      <div className="">
        <h1 className="text-primary text-2xl ">{titulo}</h1>
        <p className="text-gray-700 text-sm">{descricao}</p>
      </div>
    </footer>
  );
}
