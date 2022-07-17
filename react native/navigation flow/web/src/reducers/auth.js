

export default function AuthReducer (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case 'AUTH_LOGIN_INIT':
            return []
        case 'AUTH_LOGIN_SUCCESS':
            return payload;
        default:
            return state;
    }
}