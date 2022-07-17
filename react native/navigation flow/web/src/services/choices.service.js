import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const submitSelectedChoices = () => {
    return axios
        .get(`${API_URL}/rSubmitSelection`)
        .then(response => {
            return response;
        })
        .catch(err => {
            return err;
        })
}


export default {
    submitSelectedChoices,
};