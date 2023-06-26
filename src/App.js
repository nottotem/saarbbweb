import { Route, Routes } from "react-router-dom";
import Inicio from "./views/inicio";
import Institucional from "./views/institucional";
import Comunidad from "./views/comunidad";
import Preguntas from "./views/preguntas";
import Contacto from "./views/contacto";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/institucional" element={<Institucional />} />
        <Route exact path="/comunidad" element={<Comunidad />} />
        <Route exact path="/faq" element={<Preguntas />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
