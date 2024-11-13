// Agendamento.jsx
import React, { useState, useEffect } from 'react';

function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [barbeiros, setBarbeiros] = useState([]);
  const [selectedBarbeiro, setSelectedBarbeiro] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      // Buscar horários para o dia selecionado
      fetch(`/api/horarios/${selectedDate}`)
        .then(response => response.json())
        .then(data => setHorarios(data));
    }
  }, [selectedDate]);

  return (
    <div>
      <h2>Escolha o dia do seu agendamento</h2>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {selectedDate && horarios.length > 0 && (
        <div>
          <h2>Escolha o horário</h2>
          {horarios.map((hora, index) => (
            <button
              key={index}
              onClick={() => setSelectedHorario(hora)}
              className={`horario ${selectedHorario === hora ? 'selected' : ''}`}
            >
              {hora}
            </button>
          ))}
        </div>
      )}

      {selectedHorario && (
        <div>
          <h2>Escolha seu barbeiro</h2>
          {barbeiros.map((barbeiro, index) => (
            <button
              key={index}
              onClick={() => setSelectedBarbeiro(barbeiro)}
              className={`barbeiro ${selectedBarbeiro === barbeiro ? 'selected' : ''}`}
            >
              {barbeiro}
            </button>
          ))}
        </div>
      )}

      {selectedBarbeiro && (
        <div>
          <h3>Agendamento Confirmado</h3>
          <p>Data: {selectedDate}</p>
          <p>Horário: {selectedHorario}</p>
          <p>Barbeiro: {selectedBarbeiro}</p>
        </div>
      )}
    </div>
  );
}

export default Agendamento;
