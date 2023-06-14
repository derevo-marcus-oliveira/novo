import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "../Context/Context";

import Carousel from "../Components/Carousel";

export default function CompararItens() {
    debugger
    const [enums, dados, BuscaDados, itens, setItem] = useContext(DataContext);
    const [text, setText] = useState("")

    var ajuste = [];

    function juncao() {
        debugger
        itens.forEach(element => {

            element.especificacoes.forEach(especificacao => {
                if (ajuste.filter(item => item.especificacao == especificacao.especificacao) == 0) {
                    ajuste.push({
                        especificacao: especificacao.especificacao
                    })
                }
            })

        });

        console.log(ajuste);
    }
    juncao();
    return (

        <div>
            <div className='container '>
                <div className='row'>
                    <div className='view-M col-2' >

                    </div>
                    <div className='view-M col-5' >
                        <div className="p-3 text-center">
                            <h5>{itens[0].nome}</h5>
                        </div>
                        <Carousel id={"view1"} img={itens[0].imagens} style={"405px"} />

                    </div>
                    <div className='view-M col-5'>
                        <div className="p-3 text-center">
                            <h5>{itens[1].nome}</h5>
                        </div>
                        <Carousel id={"view2"} img={itens[1].imagens} style={"405px"} />
                    </div>
                </div>
                <div className="row">
                    <div className="p-5 text-center"></div>
                    <div className="p-5 text-center"></div>
                </div>
                {ajuste.map((a, id) => (
                    <div className="row gy-5 text-justify" key={id}>
                        <div className="col-2 tabela">
                            <div className="p-3">{a.especificacao}</div>
                        </div>
                        <div className="col-5 tabela">
                            <div className="p-3">
                                {
                                    (itens[0].especificacoes.filter(item => item.especificacao == a.especificacao).length > 0) ?
                                        itens[0].especificacoes.filter(item => item.especificacao == a.especificacao)[0].especificacao_descricao : ""
                                }
                            </div>
                        </div>
                        <div className="col-5 tabela">
                            <div className="p-3">
                                {
                                    (itens[1].especificacoes.filter(item => item.especificacao == a.especificacao).length > 0) ?
                                        itens[1].especificacoes.filter(item => item.especificacao == a.especificacao)[0].especificacao_descricao : ""
                                }
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div >

    )
}
