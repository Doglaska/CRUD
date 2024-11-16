import React, { useState } from 'react';
import './agendamento.css';

const Agendamento = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHorario, setSelectedHorario] = useState('');
  const [selectedBarbeiro, setSelectedBarbeiro] = useState('');
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  const barbeiros = [
    { name: 'Carlos Silva', image: '/src/images/carlos.avif' },
    { name: 'Nelson Souza', image: '/src/images/nelson.avif' },
    { name: 'Lucas Santos', image: '/src/images/lucas.avif' }
  ];

  const horariosSemana = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  const horariosSabado = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(e.target.value);

    const dayOfWeek = date.getUTCDay();

    if (dayOfWeek === 0) {
      setHorariosDisponiveis([]); // Domingo: sem horários
      alert('A barbearia está fechada aos domingos. Selecione outro dia.');
    } else if (dayOfWeek === 6) {
      setHorariosDisponiveis(horariosSabado); // Sábado: horários reduzidos
    } else {
      setHorariosDisponiveis(horariosSemana); // Segunda a sexta: horários completos
    }
  };

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePreviousStep = () => setStep((prev) => prev - 1);

  const handleConfirmAppointment = () => {
    // Dados do agendamento que o usuário selecionou
    const appointmentData = {
      userId: 'user123',  // Defina um ID de usuário adequado
      barberName: selectedBarbeiro,
      serviceName: 'Corte de Cabelo',  // Aqui você pode adaptar o serviço escolhido
      scheduledTime: `${selectedDate} ${selectedHorario}`,
    };

    // Enviar os dados para o backend
    axios.post('http://localhost:5000/appointments', appointmentData)
      .then(response => {
        if (response.data.success) {
          alert('Agendamento realizado com sucesso!');
          setStep(1);  // Resetar o processo de agendamento ou redirecionar o usuário
        }
      })
      .catch(error => {
        console.error('Erro ao realizar o agendamento:', error);
        alert('Erro ao realizar o agendamento. Tente novamente.');
      });
  };

  return (
    <div className="agendamento-page">
      <h2>Agendamento</h2>

      {step === 1 && (
        <div className="step-container">
          <label>
            Data:
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </label>
          <button
            onClick={handleNextStep}
            disabled={!selectedDate || horariosDisponiveis.length === 0}
            className="confirm-btn"
          >
            Confirmar Data
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="step-container">
          <h3>Escolha um Horário</h3>
          <div className="horarios-container">
            {horariosDisponiveis.map((hora, index) => (
              <button
                key={index}
                type="button"
                className={`horario ${selectedHorario === hora ? 'selected' : ''}`}
                onClick={() => setSelectedHorario(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
          <button
            onClick={handlePreviousStep}
            className="back-btn"
          >
            Voltar
          </button>
          <button
            onClick={handleNextStep}
            disabled={!selectedHorario}
            className="confirm-btn"
          >
            Confirmar Horário
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="step-container">
          <h3>Escolha um Barbeiro</h3>
          <div className="barbeiros-container">
            {barbeiros.map((barbeiro, index) => (
              <div
                key={index}
                className={`barbeiro ${selectedBarbeiro === barbeiro.name ? 'selected' : ''}`}
                onClick={() => setSelectedBarbeiro(barbeiro.name)}
              >
                <img
                  src={barbeiro.image}
                  alt={barbeiro.name}
                  className="barbeiro-image"
                />
                <p>{barbeiro.name}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handlePreviousStep}
            className="back-btn"
          >
            Voltar
          </button>
          <button
            onClick={handleNextStep}
            disabled={!selectedBarbeiro}
            className="confirm-btn"
          >
            Confirmar Barbeiro
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="step-container confirmacao">
          <h3>Agendamento Concluído!</h3>
          <p>Data: {selectedDate}</p>
          <p>Horário: {selectedHorario}</p>
          <p>Barbeiro: {selectedBarbeiro}</p>
          <button onClick={handleConfirmAppointment} className="confirm-btn">
            Confirmar Agendamento
          </button>
        </div>
      )}
    </div>
  );
};

export default Agendamento;

