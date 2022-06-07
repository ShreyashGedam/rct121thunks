export const authActions = {
    GET_AUTH_REQUEST : "GET_AUTH_REQUEST",
    GET_AUTH_SUCCESS : "GET_AUTH_SUCCESS",
    GET_AUTH_FAILURE : "GET_AUTH_FAILURE"
}


export const getAuthRequest = () => ({
    type : authActions.GET_AUTH_REQUEST
})

export const getAuthSucess = (data) => ({
    type : authActions.GET_AUTH_SUCCESS,
    payload : data
})

export const getAuthFailuer = () => ({
    type : authActions.GET_AUTH_FAILURE
})