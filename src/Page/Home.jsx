
import Carousel from "../Components/Carousel";
import { Navigate } from "react-router-dom";

function Home() {    
    return (
        <div className="container">
            
            <div className="row">
                <div className="p-3 text-center" >
                    {/* Posso Escrever algo */}
                </div>
            </div>
            <div className="row">
                <div className="view-G col-8" >
                    <Carousel id={"view1"} />  
                </div>  
                <div className="view-G col-4">
                    {/* <i className="bi bi-alarm"></i> */}
                    <div className="qualquer"></div>
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
                    <div className="qualquer"></div>                   
                </div>
                <div className="view-M col-6 ">
                    {/* <i className="bi bi-airplane"></i> */} 
                    <div className="qualquer"></div>     
               
                    <div className="row ">
                        <div className="view-M col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <Carousel id={"view2"} />  
                        </div>
                        <div className="view-M col-6">
                            {/* <i className="bi bi-alarm"></i> */}
                            <div className="qualquer"></div>      
                        </div>    
                    </div>                               
                </div> 
            </div>                   
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
                       
            <div className="row">
                <div className="p-5 text-center">
                    {/* Posso Escrever algo */}
                </div>
            </div>
            
        </div>
    )
}

export default Home;