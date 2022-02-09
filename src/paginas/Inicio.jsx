import {useState, useEffect} from "react";
import Cliente from "./Cliente";


const Inicio = () => {

  const [clientes, setClientes] = useState([]);
  
  useEffect( () => {
    try {
      const obtenerClientes = async () => {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setClientes(resultado)
      }
      obtenerClientes();
    } catch (error) {
      console.log(error);
    }
}, []);

  const handleEliminar = async id => {
      const confirmar = confirm('¿Esta seguro desea eleminar este cliente?')
      if (confirmar) {
        try {
          const url = `http://localhost:4000/clientes/${id}`;
          const respuesta = await fetch(url, {
            method: 'DELETE'
          });
          await respuesta.json();
          
          const arrayClientes = clientes.filter(cliente => cliente.id !== id)
          setClientes(arrayClientes);
          
        } catch (error) {
          console.log(error);
        }
      }else{
        return
      }
  }



  return (
    <>
      <h1 className='font-black text-4xl text-blue-600 '>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody className="">
        {clientes.map(cliente =>(
          <Cliente key={cliente.id} cliente={cliente} handleEliminar={handleEliminar} />
          ))}
        </tbody>

      </table>

    


      
    </>
  );
};

export default Inicio;
