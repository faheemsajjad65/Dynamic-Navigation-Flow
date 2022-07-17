import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const fetchExperiments = async params => {
    const response = await axios.get(`${API_URL}/rFetchExperiments`)
    return response;
}




export default {
    fetchExperiments
};