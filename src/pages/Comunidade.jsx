import SideBar from "../components/Sidebar";
export default function Comunidade() {
    return(
        <>
          <SideBar/>
        <div>
            <h1 className="text-primary">Olá, bem-vindo à nossa comunidade!</h1>
            
            <div className="h-50 -w-50">
                <div className="bg-gray-200 h-full w-full"></div>
                <div className="bg-gray-200 h-full w-full"></div>
                <div className="bg-gray-200 h-full w-full"></div>
            </div>
        </div>
        </>
    )
}