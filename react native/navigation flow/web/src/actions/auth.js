import authService from '../services/auth.service'

export const gettingLogedIn = () => dispatch => {

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

            return Promise.resolve(response.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}
