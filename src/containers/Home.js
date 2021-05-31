import React, { useState } from 'react'
import Header from '../components/UI/Header'
import './Home.css'
import TextInput from '../components/Inputs/TextInput'
import ButtonInput from '../components/Inputs/ButtonInput'
import getPokemons from '../services/pokemonService'
import PokeList from '../components/UI/PokeList'

const Home = () => {
    const [showPoke, setShowPoke] = useState(0)
    const [poke, setPoke] = useState([])

    const response = async () => {
        setPoke(await getPokemons.resData)
        console.log('POKESHOME', poke)
    }

    return (
        <div className="homeDiv">
            <Header />
            <div className="contentDiv">
                <div className="inputDiv">
                    <TextInput
                        value={showPoke}
                        setValue={setShowPoke} />
                    <ButtonInput text="Mostrar" onClick={response} />
                </div>
                <div className="pokeCards">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
