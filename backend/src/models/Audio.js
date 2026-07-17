import mongoose from "mongoose"



const audioSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    duracao:{
        type: Number,
        required: true
    },
     imagem:{
        type: String,
        required: true
    },
    arquivoUrl:{
        type: String,
        required: true
    }
})

export default mongoose.model("Audio", audioSchema)