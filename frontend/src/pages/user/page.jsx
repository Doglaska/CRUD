// user.jsx
import React, { useState } from "react";
import './page.css';

const UserPage = () => {
  const [formData, setFormData] = useState({
    nome: "Nome do Usuário",
    email: "email@exemplo.com",
    telefone: "(11) 99999-9999",
    dataNascimento: "2000-01-01",
  });

  return (
    <div className="user-page">
      <h2>Informações do Usuário</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            readOnly
          />
        </label>
        
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
          />
        </label>
        
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            readOnly
          />
        </label>
        
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            readOnly
          />
        </label>
      </form>
    </div>
  );
};

export default UserPage;
