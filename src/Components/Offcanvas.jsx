
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function Offcanvas({ type, dados }) {
    
    const [itens, setItem] = useState([])
    const [marca, setMarca] = useState([])

    dados.map((item) => {
        if (marca.filter(d => d == item.marca).length == 0) {
            setMarca([...marca, item.marca]);
        }
    })
    
    useEffect(() => {
            
        
        $(".offcanvas-body input").on("click", (item) => {
            
            if (item.target.checked == true) {
                setItem([...itens, item.target.id])
            }
        })    
    })
    
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filtrar</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => {
                        setItem([])
                        setMarca([])
                    }}></button>
            </div>
            <div className="offcanvas-body">
                {marca.map((item, id) => (
                    <div className="form-check form-switch" key={id}>
                        <input className="form-check-input" type="checkbox" role="switch" id={item} />
                        <label className="form-check-label" htmlFor={item}>{item}</label>
                    </div>
                ))}
                
                <br></br>
                <div >
                    <button className="btn btn-success" data-bs-dismiss="offcanvas" onClick={() => {
                        setItem([])
                        setMarca([])
                    }}> 
                        <Link to={`/categoria/${itens.toString()}`} style={{textDecoration: 'none', color:"#fff"}}>
                            Adicionar
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas;