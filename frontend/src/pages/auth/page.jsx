import { useState, useEffect } from "react"
import { TextField } from "@mui/material"
import styles from './page.module.css'
import authServices from "../../services/auth"
import { useNavigate } from "react-router-dom"
import {LuLogIn} from "react-icons/lu"

export default function Auth(){
    const [formType, setFormType] = useState('login')
    const [formData, setFormData] = useState(null)
    const {login, signup, authLoading} = authServices()

    const navigate = useNavigate()

    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        if(authData){
            return navigate('/profile')
        }
    }, [authData])

    const handleChangeFormType = () => {
        setFormData(null)
        if(formType === 'login'){
            setFormType('signup')
        }else{
            setFormType('login')
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        
        switch (formType) {
            case 'login':
                login(formData)
                break;
            case 'signup':
                if(formData.password !== formData.confirmPassword){
                    console.log('Password divergente')
                    return
                }
                signup(formData)
            break;
        }
    }

    if(authLoading){
        return (<h1>Carregando...</h1>)
    }

    return (
        <div className={styles.authPageContainer}>
            {formType === 'login' ? (
                <>
                    <form onSubmit={handleSubmitForm}>
                        <h1>Login</h1>
                        <button onClick={handleChangeFormType}>Não tem uma conta? Clique aqui</button>
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <div className={styles.buttonContainer}>
                            <button type="button" onClick={() => navigate('/')}>Voltar</button>
                            <button type="submit">Login <LuLogIn /></button>
                        </div>
                    </form>
                </>
            ) : null}
    
            {formType === 'signup' ? (
                <>
                    <form onSubmit={handleSubmitForm}>
                        <h1>Signup</h1>
                        <button onClick={handleChangeFormType}>Já tem uma conta? Clique aqui</button>
                        <TextField
                            required
                            label="Fullname"
                            type="text"
                            name="fullname"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleFormDataChange}
                        />
                        <div className={styles.buttonContainer}>
                            <button type="button" onClick={() => navigate('/')}>Voltar</button>
                            <button type="submit">Signup <LuLogIn /></button>
                        </div>
                    </form>
                </>
            ) : null}
        </div>
    );
}    