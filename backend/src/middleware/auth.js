import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      mensagem: "Token não informado",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    return next();
  // eslint-disable-next-line no-unused-vars
  } catch (erro) {
    return res.status(401).json({
      mensagem: "Token inválido",
    });
  }
}