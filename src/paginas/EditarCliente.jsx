import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerCliente = async () => {
      try {
        const url = ` http://localhost:4000/clientes/${cliente.id} `;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500);
    };

    obtenerCliente();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-600 ">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar un cliente </p>
      {Object.keys(cliente).length === 0 ? (
        <p>Cliente ID no valido</p>
      ) : (
        <Formulario cliente={cliente} cargando={cargando} />
      )}
    </div>
  );
};

export default EditarCliente;
