import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "../Context/Context";
import { useParams, useMatches, useResolvedPath } from 'react-router-dom';
import Card from '../Components/Card';
import Offcanvas from '../Components/Offcanvas';

import Modal from '../Components/Modal';

export default function CompararItens() {

    const [enums] = useContext(DataContext);
    const [text, setText] = useState("")

    return (

        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                aunch demo modal
            </button>


            <div class="modal modal-dialog modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Comparar</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='row'>
                                <div className="col-2">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <form action={"/categoria/" + text} className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setText(e.target.value) }} />
                                        <button className="btn btn-outline-success" type="submit" >Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
