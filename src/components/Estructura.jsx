import React from 'react'
import Imagenes from './Imagenes'
// import { Navbar } from './Navbar'
import { Presentacion } from './Presentacion'
import { TCuarto } from './TCuarto'
import { TQuinto } from './TQuinto'
import { TSexto } from './TSexto'

export const Estructura = () => {
  return (
    <>
      <div classNameName='container'>
        <div>
          <br />
          <br />
          <div className="card text-bg-dark">
            <img src={Imagenes.img3} alt="Portafolio" />
          </div>
          <div className='container'>
            <div>
              <Presentacion />
            </div>
            <br />
            <br />
            <br />
            <div>
              <TCuarto />
            </div>
            <br />
            <br />
            <div >
             <TQuinto/> 
            </div>
            <br />
            <br />
            <div >
             <TSexto/> 
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
