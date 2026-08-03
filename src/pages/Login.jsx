import { MdWavingHand } from "react-icons/md";
import { useState } from "react";

export default function Login() {
  const [mostraCadastro, setMostraCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    try {
      const resposta = await fetch("http://localhost:3000/usuarios", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      const dados = await resposta.json();

      console.log(dados);
    } catch (erro) {
      console.log(erro);
    }
  }

  async function login() {
    try {
      console.log("botã oclicado")
      const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });
      const dados = await resposta.json();

      localStorage.setItem("token", dados.token);
      localStorage.setItem("usuario", JSON.stringify(dados.usuario));

      console.log(dados);
    } catch (erro) {
      console.error(erro);
    }
  }

  const limpar = () => {
    (setNome(""), setEmail(""), setSenha(""));
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col rounded-3xl bg-white border h-200 w-100 gap-4 items-center justify-center">
          <div className="animate-bounce [animation-duration:3s] h-13 w-13 bg-primary rounded-full flex items-center justify-center">
            <MdWavingHand className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-4xl font-bold mb-8 text-primary">
            Bem-vindo a Aura
          </h1>

          <form className="flex flex-col gap-4 w-80">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-gray-300 rounded-2xl p-2"
            />

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="border border-gray-300 rounded-2xl p-2"
            />

            <button
              type="button"
              className="bg-primary text-white rounded-2xl p-2 mt-4"
              onClick={login}
            >
              Entrar
            </button>

            <p className="text-sm px-10 text-gray-500">
              Não tem uma conta?
              <button
                type="button"
                className="text-primary hover:underline ml-2"
                onClick={() => setMostraCadastro(true)}
              >
                Cadastre-se
              </button>
            </p>
          </form>
        </div>
      </div>

      {mostraCadastro && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl w-96">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Criar conta
            </h2>

            <input
              className="border p-2 rounded-xl w-full mb-4"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              className="border p-2 rounded-xl w-full mb-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="border p-2 rounded-xl w-full mb-4"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <div className="flex gap-4">
              <button
                className="bg-primary text-white px-4 py-2 rounded-xl"
                type="button"
                onClick={() => {
                  cadastrar();
                  setMostraCadastro(false);
                  limpar();
                }}
              >
                Criar conta
              </button>

              <button
                onClick={() => setMostraCadastro(false)}
                className="border px-4 py-2 rounded-xl"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
