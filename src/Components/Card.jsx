import { Link } from "react-router-dom";


function Card({ props }) {

    return (
        <Link to={`/detalhe/${props.id}`}>
            <div className="card" >
                <img src={props.imagens[0].url} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.marca} - <span>{props.modelo}</span></p>

                    {props.avaliacoes.map((item, id) => (
                        <div key={id}>

                            <label htmlFor="test" className="form-label" style={{ marginBottom: "-10px" }}>{item.avaliacao}</label>
                            <div id="test" className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ "height": "25px", fontSize: "1.05em" }}>
                                <div className="progress-bar  progress-bar-striped progress-bar-animated" style={{ "width": item.descricao_avaliacao + "%" }}></div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </Link>
    )
}

export default Card;