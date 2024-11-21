import axios from "axios";

const API_URL = "http://localhost:3000/users";  // URL do backend

const userServices = () => {
    const getUser = async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}`);
            return response.data;  // Retorna os dados do usuário
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    };

    const updateUser = async (userId, updatedData) => {
        try {
            const response = await axios.put(`${API_URL}/user/${userId}`, updatedData);
            return response.data;  // Retorna os dados atualizados do usuário
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    };

    return {
        getUser,
        updateUser
    };
};

export default userServices;
