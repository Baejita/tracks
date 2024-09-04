import trackerApi from "../api/trackerApi";
import createDataContext from "./createDataContext";


const authReducer = (state, actions) => {
    switch (actions.type) {
        case "add_error" : 
        return {...state, errorMessage : actions.payload}


        default: 
        return state;
    }
}

const signup = (dispatch) => {
    return async ({email, password})=>{
        try {
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data)
        } catch (error) {
            dispatch({type: 'add_error', payload: "Somthing went wrong with sign up"})
        }
    }
}

const signin = (dispatch) => {
    return  ({email, password})=>{
       
    }
}
const signout = (dispatch) => {
    return ()=>{
        
    }
}
export const {Context , Provider} = createDataContext(
    authReducer,
    {signin, signout , signup},
    {isSignedIn: false , errorMessage: ''}
)