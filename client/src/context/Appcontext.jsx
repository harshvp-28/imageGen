import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()
const AppContextProvider = (props)=> {
    const[user,setUser]  = useState(null); // tells whether user is logged in or not
    const[showLogin,setShowLogin] = useState(false); //login form will be hidden in false

    const [token,setToken] = useState(localStorage.getItem('token')) //stores token in local storage
    const[credit,setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL //connecting frontend with backend
    const navigate = useNavigate()
    const loadCreditsData = async()=> {  // to load and show credits from api backend
        try {
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers : {token}})
            if(data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }

        } catch(error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image' , {prompt} , {headers:{token}})

            if(data.success) {
                loadCreditsData()
                return data.resultImage
            } else {
                toast.error(error.message)
                loadCreditsData()
                if(data.creditBalance === 0) {
                    navigate('/buy')
                }
            }
        } catch(error) {
            toast.error(error.message)
        }
    }


    const logout = ()=> {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }
    useEffect(()=>{ //call the credit showing fn
        if(token) {
            loadCreditsData()
        }
    },[token])

    const value = {
        user,setUser , showLogin,setShowLogin, backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
    }
    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>

    )
}
export default AppContextProvider