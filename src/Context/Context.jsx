import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export default  function Provider({ children }) {
    
    const [dados, setDados] = useState([])
    const [enums, setEnums] = useState([])
    
    
     useEffect(() => {
        const inicialBuscaEnums = async() => {
            await axios.get("http://localhost:4003/BuscarEnum")
            .then((response) => {
                
                setEnums(response.data)
            })
            .catch((error) => {
                
                console.log(error)
            });
        }

        const inicialBuscaDados = async() => {
            await axios.get("http://localhost:4003/Buscar")
            .then((response) => {                
                setDados(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
        }

        inicialBuscaEnums();
        inicialBuscaDados();
    }, []);

    const BuscaDados = async ( params ) => {
        debugger
        params
        await axios("http://localhost:4003/Buscar", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {   

            if (params.id) {
                console.log(response.data.filter(item => item.id.search(params.id) ))
            }

            if (params.tipo) {
                console.log(response.data.filter(item => item.tipo.search(params.tipo) ))
            }

            if (params.nome) {
                console.log(response.data.filter(item => item.nome.search(params.nome) ))
            }

            if (params.marca) {
                console.log(response.data.filter(item => item.marca.search(params.marca) ))
            }

            if (params.modelo) {
                console.log(response.data.filter(item => item.modelo.search(params.modelo) ))
            }

            setDados(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    






    return (
        <DataContext.Provider value={[enums, dados, BuscaDados]}>
            {children}
        </DataContext.Provider>
    )
}