import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./componentes/Menu";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Rodape from "./componentes/Rodape";

import Inicio from "./paginas/Inicio";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Post from "./paginas/Post/index.js";
import SobreMim from "./paginas/SobreMim";
import ScrollToTop from "componentes/ScroolToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element = {<Inicio />} />;
          <Route path="sobremim" element = {<SobreMim />} />; 
                      
        </Route>
        <Route path="posts/:id/*" element = {<Post />} />;
        <Route path="*" element = {<NaoEncontrada />} />

      </Routes>

      
      <Rodape />

    </BrowserRouter>
  )
}

export default AppRoutes;
