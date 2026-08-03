import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  async store(req, res) {
    const { nome, email, senha } = req.body;

    const usuarioExiste = await User.findOne({ email });

    if (usuarioExiste) {
      return res.status(400).json({
        erro: "Este e-mail já está cadastrado",
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 8);

    const usuario = await User.create({
      nome,
      email,
      senha: senhaCriptografada,
    });

    return res.json(usuario);
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await User.findOne({ email });

      if (!usuario) {
        return res.status(404).json({
          mensagem: "Usuário não encontrado",
        });
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({
          mensagem: "Senha incorreta",
        });
      }
      const token = jwt.sign(
        {
          id: usuario._id,
        },
          // eslint-disable-next-line no-undef
          process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        usuario: {
          id: usuario._id,
          nome: usuario.nome,
          email: usuario.email,
        },
        token,
      });
    } catch (erro) {
      console.log(erro);

      return res.status(500).json({
        mensagem: "Erro interno do servidor",
      });
    }
  }
}

export default new UserController();