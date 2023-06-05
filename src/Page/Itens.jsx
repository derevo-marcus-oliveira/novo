import React, { useContext, useEffect } from 'react'
import { DataContext } from "../Context/Context";
import { useParams, useMatches, useResolvedPath } from 'react-router-dom';
import Card from '../Components/Card';

export default function Itens() {

    var data = []
    debugger
    const path = useParams()
    const path1 = useResolvedPath()

    const [enums, dados, BuscaDados] = useContext(DataContext);

    useEffect(()=>{
        data = []
        
    }, [])

    if (path.tipo) {
        var re = new RegExp(path.tipo, 'i')
        dados.forEach(element => {

            if (element.tipo.search(re) != -1) {
                data.push(element)
            }
            else if (element.nome.search(re) != -1) {
                data.push(element)
            }
            else if (element.marca.search(re) != -1) {
                data.push(element)

            }
            else if (element.modelo.search(re) != -1) {
                data.push(element)
            }
        });

        console.log(data)
    }

    return (
        <div className="container">


            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
                <div className="p-3 col-10 ">
                    <h5>Pesquisa: <span>{path.tipo}</span></h5>
                </div>

                <div className="p-2 col-2">
                    <div className="col-12 text-end">
                        <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => { ($(".offcanvas-backdrop").length > 1) ? $(".offcanvas-backdrop")[0].remove() : true }}>
                            <i className="bi bi-filter-circle"></i> Filtro
                        </button>
                    </div>

                    {/* <Offcanvas type={arr.tipo} dados={arr.Dados}/> */}
                </div>
            </div>
            <div className="row">
                {(data.length > 0) ? data.map((d) => (
                    <div key={d.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Card props={d} />
                    </div>
                )) : (
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center" style={{ padding: "300px 0" }}>
                        <h3>Nothing found</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
