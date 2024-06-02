import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

// first created instance of createcontext..
export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}

// parentAuthContext create krenge..

const ParentAuthContext = ({ children }) => {

    const initialState = { user: null };

    const [state, dispatch] = useReducer(reducer, initialState);

    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
    }

    const Logout = () => {
        localStorage.removeItem('mytoken')
        dispatch({ type: "LOGOUT" })
        toast.success('Successfully Logged out..')
    }

    useEffect(() => {
        // alert('page is refreshed')
        // localstrorage mai token hai ky check krenge..

        async function getCurrentUser() {
            try {

                const response = await axios.post('http://localhost:8000/api/v1/auth/get-current-user', { token })
                if(response.data.success){
                    Login(response.data.user)
                }

            } catch (error) {
                toast.error(error.response.data.message)
            }

        }
        const token = JSON.parse(localStorage.getItem("mytoken"));
        if (token) {
            getCurrentUser()
        }
    }, [])

    return (
        <>
            <AuthContext.Provider value={{ state, Login, Logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )

}

export default ParentAuthContext;