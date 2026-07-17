import SideBar from "../components/Sidebar";
export default function Atividade() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col ml-95 py-20 px-50 gap-4">

      <h1 className="text-primary text-4xl">Olá, bem-vindo à nossa atividade!</h1>
            
            <div className="flex gap-8 mt-20  "> 
                <div className="bg-gray-200 h-60 w-74 rounded-4xl"></div>
                <div className="bg-gray-200 h-60 w-74 rounded-4xl"></div>
                <div className="bg-gray-200 h-60 w-74 rounded-4xl"></div>
            </div>
      </div>
    </>
  );
}
