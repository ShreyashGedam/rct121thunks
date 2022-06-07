import axios from "axios"

export const postActions = {
    GET_GET_REQUEST : "GET_GET_REQUEST",
    GET_GET_SUCCESS : "GET_GET_SUCCESS",
    GET_GET_FAILURE : "GET_GET_FAILURE"
}

export const getRequest = () => ({
    type : postActions.GET_GET_REQUEST
})

export const getSucess = (data) => ({
    type : postActions.GET_GET_SUCCESS,
    payload : data
})

export const getFailuer = () => ({
    type : postActions.GET_GET_FAILURE
})

export const getData = () => (dispatch, getState ) => {

    const dataRequest = getRequest()
        dispatch(dataRequest)
        // console.log("Token is", getState().auth.token )

        axios( {
            url : "https://jsonplaceholder.typicode.com/posts",
            method : "GET"
        })
        .then( (res) => {
            const dataSucess = getSucess(res.data)  
            // console.log(res.data)
            dispatch(dataSucess)
        })
        .catch( (err) => {
            const dataError = getFailuer
            dispatch(dataError)
        })

}