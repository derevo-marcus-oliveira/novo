import React, { useContext, useEffect, useState } from 'react'
import Carousel from "../Components/Carousel";
import { useParams, useMatches, useResolvedPath } from 'react-router-dom';
import { DataContext } from '../Context/Context';
import CardSimples from '../Components/CardSimples';

export default function Detalhe() {
    debugger
    const path = useParams()
    const [enums, dados, BuscaDados] = useContext(DataContext);

    const [detalhe, setDetalhe] = useState([])
    const a = async () => {

        await BuscaDados();
    }

    
    useEffect(() => {
        function action() {
            if (dados.length > 0) {
                setDetalhe(dados.filter(item => item.id == path.id)[0])
            }
        }
        action()
    }, [a])

    

    setTimeout(() => {
        debugger
        const carousel = document.querySelector(".carousell"),
            firstImg = carousel.querySelectorAll(".card")[0],
            arrowIcons = document.querySelectorAll(".wrapper i");

        let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

        const showHideIcons = () => {
            // showing and hiding prev/next icon according to carousel scroll left value
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
            arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
                // if clicked icon is left, reduce width value from the carousel scroll left else add to it
                carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
                setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
            });
        });

        const autoSlide = () => {
            // if there is no image left to scroll then return from here
            if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

            positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
            let firstImgWidth = firstImg.clientWidth + 14;
            // getting difference value that needs to add or reduce from carousel left to take middle img center
            let valDifference = firstImgWidth - positionDiff;

            if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
            // if user is scrolling to the left
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }

        const dragStart = (e) => {
            // updatating global variables value on mouse down event
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            // scrolling images/carousel to left according to mouse pointer
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            carousel.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        }

        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");

            if (!isDragging) return;
            isDragging = false;
            autoSlide();
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);

        // document.addEventListener("mousemove", dragging);
        // carousel.addEventListener("touchmove", dragging);

        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("touchend", dragStop);

    }, 2000)

    return (
        <div className="container">
            {detalhe.length == 0 ? (
                <div className="row">
                    <h1>Error 404 </h1>
                </div>
            ) : (

                <div className="row">
                    <div className="col-12">
                        <div className="row ">
                            <div className="view-G col-8">
                                <Carousel id={"view1"} img={detalhe.imagens} />
                            </div>
                            <div className="view-G col-4 " >
                                {/* <i className="bi bi-alarm"></i> */}
                                <div className="align-self-center" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
                                    <h4 style={{ margin: 12 }}>{detalhe.nome}</h4>
                                    <h6 style={{ marginLeft: 12 }}>Marca: {detalhe.marca}</h6>
                                    <h6 style={{ marginLeft: 12 }}>Modelo: {detalhe.modelo}</h6>
                                </div>
                            </div>
                        </div>
                        <h1 className="display-3">Especificações</h1>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {detalhe.especificacoes.map((p, id) => (
                                <div className="accordion-item" key={id}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + p.especificacao.replace(/ /g, "")} aria-expanded="false" aria-controls={"flush-collapse" + p.especificacao.replace(/ /g, "")}>
                                            {p.especificacao}
                                        </button>
                                    </h2>
                                    <div id={"flush-collapse" + p.especificacao.replace(/ /g, "")} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{p.especificacao_descricao}</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <h1 className="display-3">Avaliações</h1>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {detalhe.commentarios.length > 0 ? detalhe.commentarios.map((p, id) => (
                                <div className="accordion-item" key={id}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + p.usuario_nome} aria-expanded="false" aria-controls={"flush-collapse" + p.usuario_nome}>
                                            {p.usuario_nome}
                                        </button>
                                    </h2>
                                    <div id={"flush-collapse" + p.usuario_nome} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{p.comentario}</div>
                                    </div>
                                </div>
                            )) : (
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"} aria-expanded="false" aria-controls={"flush-collapse"}>
                                            Sem comentários
                                        </button>
                                    </h2>
                                    <div id={"flush-collapse"} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body"></div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <h1 className="display-3">Produtos compatíveis</h1>

                        <div className="row">
                            <div className="wrapper">
                                <i id="left" className="bi bi-arrow-left-circle"></i>
                                <div className="carousell">
                                        <CardSimples props={dados[0]}/>
                                        <CardSimples props={dados[1]}/>
                                        <CardSimples props={dados[2]}/>
                                        <CardSimples props={dados[3]}/>
                                        <CardSimples props={dados[4]}/>
                                </div>
                                <i id="right" class="bi bi-arrow-right-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

