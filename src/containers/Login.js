import React, { useState } from 'react'
import './Login.css'
import PokeLogo from '../assests/pokelogo.png'
import TextInput from '../components/Inputs/TextInput'
import ButtonInput from '../components/Inputs/ButtonInput'
import { loginService } from '../services/login-service'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')

    const loginHandler = () => {
        let response = loginService(userName, pass)
        if (response) {
            localStorage.setItem('user', userName)
            window.location.pathname= '/home'
        }
        else{}
    }

    return (
        <div className="divLoginMain">
            <div className="divLoginInputs">
                <img alt="somethingAltLogin" className="logoLogin" src={PokeLogo} />
                <div>
                    <TextInput
                        value={userName}
                        setValue={setUserName} />
                </div>
                <div>
                    <TextInput 
                    value={pass}
                    setValue={setPass} />
                </div>
                <div>
                    <ButtonInput text='login' onClick={loginHandler}/>
                </div>
            </div>
        </div>
    )
}

export default Login