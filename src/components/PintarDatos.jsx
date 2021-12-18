import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const PintarDatos = ({ personaje }) => {
  useEffect(() => {
    getData(personaje);
  }, [personaje]);

  const [personajes, setPersonajes] = useState([]);

  const getData = async (nombre) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        return Swal.fire("Error", "No se encontró el personaje", "error");
      }

      const data = await res.json();
      setPersonajes(data.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      {personajes.map((personaje) => (
        <h3 key={personaje.id}>{personaje.name}</h3>
      ))}
    </div>
  );
};

export default PintarDatos;
