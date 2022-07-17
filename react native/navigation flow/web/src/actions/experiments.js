import expService from '../services/experiments.service'

export const getExperiments = () => dispatch => {
    dispatch({
        type: 'GET_EXPERIMENTS_INIT'
    });
    return expService
        .fetchExperiments()
        .then(response => {
            return Promise.resolve(response.data);
        })
        .catch(err => {
            dispatch({
                type: 'CASES_GET_ERROR',
                payload:err.response.data
            });

            return Promise.reject(err);
        })
}

