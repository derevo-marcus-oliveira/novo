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
                        <Route path="categoria/:tipo" element={<Itens />} action={()=> {debugger}} ></Route>
                        <Route path="/categoria/:tipo" element={<Itens tipo />} action={()=> {debugger}} ></Route>
                        <Route path="detalhe/:id" element={<Detalhe />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Rotas;