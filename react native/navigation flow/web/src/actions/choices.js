
import choicesService from "../services/choices.service";

export const submitChoices = () => dispatch => {
    return choicesService
        .submitSelectedChoices()
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => {
            return Promise.resolve(err);
        })
}
