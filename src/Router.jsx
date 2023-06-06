import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Provider from './Context/Context'
import Home from './Page/Home'
import Navbar from "./Page/Navibar";
import Itens from "./Page/Itens";
import Detalhe from "./Page/Detalhe";

const Rotas = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="categoria/:tipo" element={<Itens />} action={(tipo) => {
                            debugger 
                            console.log(tipo)
                        }} errorElement={<h1>Error</h1>}></Route>

                        <Route path="detalhe/:id" element={<Detalhe />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Rotas;