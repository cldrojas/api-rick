import { useState } from "react";

import Form from "./components/Form";
import PintarDatos from "./components/PintarDatos";

function App() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="container">
      <h1>App Rick and Morty</h1>
      <Form setNombre={setNombre} />
      <PintarDatos personaje={nombre} />
    </div>
  );
}

export default App;
