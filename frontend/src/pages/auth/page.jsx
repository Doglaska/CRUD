import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

export default function Auth() {
    const [formType, setFormType] = useState("login");
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");
    const { login, signup, authLoading } = authServices();

    const navigate = useNavigate();

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("auth"));
        if (authData) {
            navigate("/profile");
        }
    }, []);

    const handleChangeFormType = () => {
        setFormData({});
        setFormType(formType === "login" ? "signup" : "login");
    };

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (formType === "signup" && formData.password !== formData.confirmPassword) {
            setError("As senhas não coincidem");
            return;
        }

        setError("");
        formType === "login" ? login(formData) : signup(formData);
    };

    if (authLoading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <div className={styles.authPageContainer}>
            {formType === "login" ? (
                <>
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
                            value={formData?.email || ""}
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Senha"
                            type="password"
                            name="password"
                            value={formData?.password || ""}
                            onChange={handleFormDataChange}
                        />
                        <div className={styles.buttonContainer}>
                            <button type="button" onClick={() => navigate("/")}>
                                Voltar
                            </button>
                            <button type="submit">
                                Login <LuLogIn />
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <form onSubmit={handleSubmitForm}>
                    <h1>Cadastro</h1>
                    <button type="button" onClick={handleChangeFormType}>
                        Já tem uma conta? Clique aqui
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                    <TextField
                        required
                        label="Nome Completo"
                        type="text"
                        name="fullname"
                        value={formData?.fullname || ""}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Email"
                        type="email"
                        name="email"
                        value={formData?.email || ""}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Contato"
                        type="text"
                        name="contact"
                        value={formData?.contact || ""}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Senha"
                        type="password"
                        name="password"
                        value={formData?.password || ""}
                        onChange={handleFormDataChange}
                    />
                    <TextField
                        required
                        label="Confirme a Senha"
                        type="password"
                        name="confirmPassword"
                        value={formData?.confirmPassword || ""}
                        onChange={handleFormDataChange}
                    />
                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={() => navigate("/")}>
                            Voltar
                        </button>
                        <button type="submit">
                            Cadastro <LuLogIn />
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
