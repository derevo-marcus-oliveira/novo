import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Provider from './Context/Context'
import Home from './Page/Home'
import Navbar from "./Page/Navibar";
import Itens from "./Page/Itens";

const Rotas = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="categoria/:tipo" element={<Itens />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Rotas;