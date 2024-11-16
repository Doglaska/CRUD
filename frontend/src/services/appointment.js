import axios from 'axios';

const appointmentServices = () => {
    const getUserAppointments = async (userId) => {
        try {
            const response = await axios.get(`/appointments/user/${userId}`);
            // Certifique-se de que a resposta possui um array de agendamentos
            return response.data.appointments || []; // Retorna um array vazio se não houver dados
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
            return [];
        }
    };

    return { getUserAppointments };
};

export default appointmentServices;
