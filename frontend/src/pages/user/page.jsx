// UserPage.jsx
import React, { useState } from "react";
import './page.css';  // Importando o CSS como módulo
const UserPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do usuário:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados, se necessário.
  };

  return (
    <div className="user-page">
      <h2>Informações do Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </label>
        
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default UserPage;
