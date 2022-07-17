import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const login = async () => {
    const response = await axios.get(`${API_URL}/rLogin`)
    return response;
};

export default {
    login
};
