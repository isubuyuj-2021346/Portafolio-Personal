import React from 'react'
import Imagenes from './Imagenes'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
                < div className="container-fluid ">
                <img  className='logo' src={Imagenes.logo} alt="" />
                    
                    <a className="navbar-brand " href="">Portafolio Personal</a>
                    
                    <img  className='logo' src={Imagenes.logo} alt="" />
                </div>
            </nav>
            

        </>
    )
}


