import authService from '../services/auth.service'

export const gettingLogedIn = () => dispatch => {

    // empty the store before login request
    dispatch({
        type:'AUTH_LOGIN_INIT'
    })

    return authService
        .login()
        .then(response => {
            dispatch({
                type:'AUTH_LOGIN_SUCCESS',
                payload:response.data
            })
            // return promise so that i get access to its then 
            return Promise.resolve(response.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}
