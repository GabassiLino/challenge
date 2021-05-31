import './Header.css'
import React from 'react'
import pokelogo from '../../assests/pokelogo2.png'

const Header = () => {
    return (
        <div>
            <header className="header">
                <img className="logoHeader" src={pokelogo} alt="somethingAltHeader"></img>
                <h1 className="tituloHeader">Pokecosas</h1>
            </header>
        </div>
    )
}

export default Header
