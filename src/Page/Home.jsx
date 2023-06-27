
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";

function Home() {

    const img1 = [
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/06/Nintendo-Switch-2.jpg",
            link: "https://tecmasters.com.br/nintendo-switch-sistema-de-retrocompatibilidade/"
        },
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/06/Cities_Skylines_II_Key_Art_png_jpgcopy.jpg",
            link: "https://tecmasters.com.br/cities-skylines-2-ia-pathfinding-jogo/"
        },
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/06/Forza-Horizon-5-ganha-parceria-com-o-mundo-da-Barbie.jpg",
            link: "https://tecmasters.com.br/forza-horizon-5-ganha-parceria-mundo-barbie/"
        },

    ]

    const img2 = [
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/06/Vila-do-Chaves-recriada-por-Erick-Rister.jpeg",
            link: "https://tecmasters.com.br/artista-recria-vila-do-chaves-em-projeto-3d/"
        },
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/05/John-Wick-Chapter-4-filmes-mais-pirateados-da-semana.jpg",
            link: "https://tecmasters.com.br/filmes-series-mais-assistidos-semana-12-a-18-06/"
        },
        {
            url: "https://cdn.tecmasters.com.br/wp-content/uploads/2023/06/Resgate-2-filmes-mais-pirateados-da-semana.jpg",
            link: "https://tecmasters.com.br/filmes-mais-pirateados-durante-semana-12-a-18-06/"
        },

    ]

    return (
        <div className="container">

            <div className="row">
                <div className="p-3 text-center" >
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row">
                <div className="view-G col-8" >
                    <div id={"carouselExampleInterval"} className={"carousel slide view1"} data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {img1.map((p, id) => (
                                (id == 0) ? (
                                    <a key={id} target="_blanck" href={p.link}>
                                        <div className="carousel-item active" data-bs-interval="2000" >
                                            <img src={p.url} className="d-block w-100" alt="..." />
                                        </div>
                                    </a>
                                ) : (
                                    <a key={id} target="_blanck" href={p.link}>
                                        <div className="carousel-item" data-bs-interval="2000" key={id}>
                                            <img src={p.url} className="d-block w-100" alt="..." />
                                        </div>
                                    </a>
                                )
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={".view1"} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={".view1"} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="view-G col-4">
                    {/* <i className="bi bi-alarm"></i> */}
                    <a target="_blank" href={"https://tecmasters.com.br/microsoft-quer-levar-o-windows-para-a-nuvem/"}>
                        <div className="qualquer img1"></div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row ">
                <div className="view-G col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <a target="_blank" href={"https://tecmasters.com.br/dev-cria-versao-do-chatgpt-para-windows-antigos/"}>
                        <div className="qualquer img2"></div>
                    </a>

                </div>
                <div className="view-M col-6 ">
                    {/* <i className="bi bi-airplane"></i> */}
                    <a target="_blank" href={"https://tecmasters.com.br/nvidia-rtx-4060-overclock-cyberpunk-2077/"}>
                        <div className="qualquer img3"></div>
                    </a>

                    <div className="row ">
                        <div className="view-M col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <div id={"carouselExampleInterval"} className={"carousel slide view2"} data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {img2.map((p, id) => (
                                (id == 0) ? (
                                    <a key={id} target="_blanck" href={p.link}>
                                        <div className="carousel-item active" data-bs-interval="2000" >
                                            <img src={p.url} className="d-block w-100" alt="..." />
                                        </div>
                                    </a>
                                ) : (
                                    <a key={id} target="_blanck" href={p.link}>
                                        <div className="carousel-item" data-bs-interval="2000" key={id}>
                                            <img src={p.url} className="d-block w-100" alt="..." />
                                        </div>
                                    </a>
                                )
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={".view2"} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={".view2"} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                        </div>
                        <div className="view-M col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <a target="_blank" to={"https://tecmasters.com.br/marco-legal-da-inteligencia-artificial-senado/"}>
                                <div className="qualquer img4"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;