import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function Provider({ children }) {

    const [dados, setDados] = useState([])
    const [enums, setEnums] = useState([])

    useEffect(() => {
        const inicialBuscaEnums = async () => {
            await axios.get("http://localhost:4003/BuscarEnum")
                .then((response) => {

                    setEnums(response.data)
                })
                .catch((error) => {

                    console.log(error)
                });
        }

        const inicialBuscaDados = async () => {
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


    async function BuscaDados () {
debugger
        await axios("http://localhost:4003/Buscar", {
            method: "GET",
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