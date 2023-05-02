import React from 'react'
import Imagenes from './Imagenes'


export const Presentacion = () => {
    return (
        <>
            
            <br />
            <br />
            <div className='container'>
                <div className='card mb-3' >
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <img className="card-img" src={Imagenes.img1} />
                        </div>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <h1 className='card-title'>Portafolio Personal</h1>
                                <br />
                                <br />
                                <p className='card-text'>El portafolio contiene proyectos de 4to, 5to y 6to grado de informática</p>
                                <br />
                                <p className='card-text'>En este portafolio se encontrarán los trabajos más
                                    relevantes de Isai Subuyuj alrededor de su carrera de perito en Informática,
                                    Cada uno de nuestros proyectos es único y personalizado según las necesidades
                                    y preferencias de cada rúbrica. En los trabajos se manejan diferentes Frameworks,
                                    lenguajes de programación y tipos de bases de datos.</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        
                    </div>
                </div>
            </div>
        </>
    )
}
