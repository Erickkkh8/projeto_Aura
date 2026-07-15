import Audio from "../models/Audio.js";

class AudioController {
  async index(req, res) {
    const audios = await Audio.find();

    return res.json(audios);
  }

 async store(req, res) {
  console.log("Body:", req.body);
  console.log("Arquivo:", req.file);

  const { titulo, categoria, duracao, imagem } = req.body;

  const audio = await Audio.create({
    titulo,
    categoria,
    duracao,
    imagem,
    arquivoUrl: req.file.filename,
  });

  return res.json(audio);
}
}

export default new AudioController();