import { useContext, useEffect, useState } from "react";
import { Form, Link, useNavigate , redirect } from "react-router-dom";

import { DataContext } from "../Context/Context";


export default function Modal({ title, conteudo }) {
    debugger
    const [enums, dados, BuscaDados] = useContext(DataContext);
    const [list, setList] = useState([])
    const [itens, setItem] = useState([])
    const navigate = useNavigate();

    $("#exampleModal").on("hide.bs.modal", () => {
        
        setList([])
        setItem([])
    })

    return (

        <div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className="col-2">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categoria
                                    </button>
                                    <ul className="dropdown-menu">
                                        {enums.map((e, id) => (
                                            <li key={id}>
                                                <a className="dropdown-item" id={e.tipo} style={{ cursor: "pointer" }} onClick={(evt) => {
                                                    setItem([])
                                                    setList(dados.filter((tipo => tipo.tipo == evt.target.id)))
                                                }}>{e.descricao}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-10">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setText(e.target.value) }} />
                                    <button className="btn btn-outline-success" type="submit" onClick={() => console.log("sucesso")}>Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="p-3 text-center">
                                <h5>Selecione dois itens do mesmo tipo para comparar</h5>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-8">
                                <div className='row'>
                                    {list.map((d) => (
                                        <div key={d.id} className="col-4" onClick={() => {

                                            if (itens.filter((filter) => filter.id == d.id).length == 0) {

                                                if(itens.length < 2){

                                                    setItem([...itens, d])
                                                }
                                            }

                                        }}>
                                            <div className="card text-bg-info mb-3" style={{ width: "14rem" }}>
                                                <div className="card-header">{d.tipo}</div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{d.nome}</h5>
                                                    <p className="card-text">.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: "22rem" }}>
                                    <div className="card-header">
                                        Itens
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {itens.map((i) => (

                                            <li key={i.id} className="list-group-item">{i.nome}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => navigate("/")}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}