

import { LOGIN_SUCCESS , FAIL } from "../Types/Types"

const initialState = {
    user: {}
}


export const UserReducer = (state=initialState , action) =>{

    switch(action.type){

        case LOGIN_SUCCESS :
        return  {
            ...state, user: action.payload
        }

        case FAIL:
        return initialState

        default :
        return state
    }

}