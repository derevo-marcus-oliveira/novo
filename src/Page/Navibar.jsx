import { useContext, useEffect, useState } from "react";
import { Form, Link, Outlet, redirect } from "react-router-dom";

import { DataContext } from "../Context/Context";
import Itens from "./Itens";

import Modal from '../Components/Modal';
import Footer from "../Components/Footer";

export default function Navbar() {

    const [enums] = useContext(DataContext);
    const [text, setText] = useState("")

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ fontSize: "2.5em" }} to={"/"}>Bizóia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "1.25em" }}>
                                    Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    {enums.map((item, id) => (
                                        <li key={id}>
                                            <Link className="dropdown-item" to={"categoria/" + item.tipo}>{item.descricao}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item" >
                                <button style={{ fontSize: "1.25em", textDecoration: "none", fontWeight: 600 }} type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <Link to={"/"} style={{ color: "rgb(248, 249, 250)", textDecoration: "none" }}>
                                        Comparar
                                    </Link>
                                </button>
                            </li>
                        </ul>
                        <form action={"/categoria/" + text} className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setText(e.target.value) }} />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Modal />
            <div className="p-1 text-center">
                {/* Posso Escrever algo */}
            </div>
            <Outlet />
            <div className="p-2 text-center">
                {/* Posso Escrever algo */}
            </div>
            <Footer />
        </>
    )
}