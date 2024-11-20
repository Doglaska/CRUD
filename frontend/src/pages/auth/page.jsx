import { useState } from "react";
import { TextField } from "@mui/material";
import styles from './page.module.css';
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

export default function Auth() {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState({});
    const { login, signup, authLoading } = authServices();

    const navigate = useNavigate();

    const handleChangeFormType = () => {
        setFormData({});
        setFormType(formType === 'login' ? 'signup' : 'login');
    };

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        switch (formType) {
            case 'login':
                const loginSuccess = await login(formData);
                if (loginSuccess) navigate('/profile');
                break;
            case 'signup':
                if (formData.password !== formData.confirmPassword) {
                    console.log('Passwords divergentes');
                    return;
                }
                const signupSuccess = await signup(formData);
                if (signupSuccess) navigate('/profile');
                break;
        }
    };

    if (authLoading) {
        return (<h1>Carregando...</h1>);
    }

    return (
        <div className={styles.authPageContainer}>
            {formType === 'login' && (
                <form onSubmit={handleSubmitForm}>
                    <h1>Login</h1>
                    <button type="button" onClick={handleChangeFormType}>
                        Não tem uma conta? Clique aqui
                    </button>
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
            )}

            {formType === 'signup' && (
                <form onSubmit={handleSubmitForm}>
                    <h1>Signup</h1>
                    <button type="button" onClick={handleChangeFormType}>
                        Já tem uma conta? Clique aqui
                    </button>
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
                        label="Telefone"
                        type="tel"
                        name="telefone"
                        onChange={handleFormDataChange}
                        InputProps={{
                            inputMode: "numeric",
                        }}
                        placeholder="(XX) XXXXX-XXXX"
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
            )}
        </div>
    );
}
