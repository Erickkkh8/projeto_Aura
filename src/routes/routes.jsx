import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "../pages/Home";
import Biblioteca from "../pages/Biblioteca";
import Atividade from "../pages/Atividade";
import Comunidade from "../pages/Comunidade";
import Login from "../pages/Login";


export default function AAppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/atividade" element={<Atividade />} />
        <Route path="/comunidade" element={<Comunidade />} />
      </Routes>
    </BrowserRouter>
  );
}
