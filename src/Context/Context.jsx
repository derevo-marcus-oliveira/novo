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
                debugger
                setEnums(response.data)
            })
            .catch((error) => {
                debugger
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
        await axios({
            url : "http://localhost:4003/Buscar",
            method: "GET",
            data : params,
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {   
                    debugger     
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