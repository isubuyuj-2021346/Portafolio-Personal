import React from 'react'
import Imagenes from './Imagenes'
import { Navbar } from './Navbar'

export const TCuarto = () => {
    return (
        <>
            <div >
                <br />
                <div className='titulo justify-content-center' >
                    <h1 >Proyectos de Cuarto</h1>
                </div>
                <br />


                <div className='container' id='#scrollspyHeading1'>
                    <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Banca Electronica</h5>
                                    <p class="card-text">DDL, DML y Diag. Entidad Relación de una banca electrónica utilizando MySQL
                                        realizada en 4to año de carrera el 28 de abril de 2021.</p>
                                    <a href="https://github.com/isubuyuj-2021346/Banca-Electronica-MySQL" class="btn btn-primary">Proyecto</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Tienda</h5>
                                    <p class="card-text">DDL, DML, vistas y procedimientos almacenados de una tienda
                                        electrónica hecho con MySQL. Realizado el 18 de septiembre de 2021.</p>
                                    <a href="https://github.com/isubuyuj-2021346/Tienda-MySQL" class="btn btn-primary">Proyecto</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Tienda de Ropa</h5>
                                    <p class="card-text">Proyecto realizado en Pseint sobre una tienda de ropa creado el 28 de julio de 2021.</p>
                                    <a href="https://github.com/isubuyuj-2021346/Tienda-de-ropa" class="btn btn-primary">Proyecto</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Centro Educativo</h5>
                                    <p class="card-text">DDL, DML y Diag. Entidad Relación sobre un centro educativo realizada en 4to
                                        año de carrera el 29 de agosto de 2021.</p>
                                    <a href="https://github.com/isubuyuj-2021346/Centro-Educativo-MySQL" class="btn btn-primary">Proyecto</a>
                                </div>
                            </div>
                            
                        </div>
                        
                        <br />
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Tarea Inner Joins y Vistas</h5>
                                    <p class="card-text">Tarea realizada en Mysql para la practica de bases de datos realizada el 5 del septiembre del 2021</p>
                                    <a href="https://github.com/isubuyuj-2021346/Vistas-e-Inner-Join" class="btn btn-primary">Proyecto</a>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}
