import { Link } from "react-router-dom";

function CardSimples({ props }) {
debugger

    return (
        <a href={`/detalhe/${props.id}`}>
            <div className="card" style={{width: "18rem", overflowX: "hidden", overflowY: "hidden"}}>
                <img src={props.imagens[0].url} className="card-img-top d-block w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.marca} - <span>{props.modelo}</span></p>
                </div>
            </div>
        </a>

    )
}

export default CardSimples;