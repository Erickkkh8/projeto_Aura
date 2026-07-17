import { MdWavingHand } from "react-icons/md";



export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex flex-col rounded-3xl bg-white  border h-200 w-100 gap-4 items-center justify-center">
              
             <div className="animate-bounce [animation-duration:3s]   h-13 w-13 bg-primary rounded-full flex items-center justify-center">
             <MdWavingHand className="w-7 h-7  text-white " />
             </div>
            
             

            <h1 className="text-4xl font-bold mb-8 text-primary "> Bem-vindo ao Aura</h1>
              
            <form className="flex flex-col gap-4 w-80 ">
                <input
        
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-2xl p-2"
                    />
                <input
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 rounded-2xl p-2"
                    />
                <button
                    type="submit"
                    className="bg-primary text-white rounded-2xl p-2 mt-4"
                    >
                    Entrar
                </button>
                <p className="text-sm px-10 text-gray-500">
                    Não tem uma conta? <a className="text-primary hover:underline">Cadastre-se</a>
                </p>
            </form>
                        
                    </div>
        </div>
    )
}