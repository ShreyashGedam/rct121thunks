import { postActions } from "./action"

const initState = {
    loading : false,
    data : [],
    error : false
}

export const dataReducer = (state = initState , action) => {
    
    switch(action.type) {
        case postActions.GET_GET_REQUEST : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }

        case postActions.GET_GET_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                error : false
            }
        }

        case postActions.GET_GET_FAILURE : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }

        default : return state
    }

}