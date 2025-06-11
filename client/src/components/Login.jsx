import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
    const[state,setState] = useState('Login')
    const {setShowLogin, backendUrl,setToken,setUser} = useContext(AppContext) // to disable or hide login form

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const onSubmitHandler = async(e)=> {
        e.preventDefault();
        try {
            if(state ===  'Login') {
               const {data} = await axios.post(backendUrl + '/api/user/login', {email,password}) // api call to login on backend

               if(data.success ) {
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token',data.token)
                setShowLogin(false)
               } else {
                toast.error(data.data.message)
               }
            } else {
                const {data} = await axios.post(backendUrl + '/api/user/register', {name,email,password}) // api call to signup on backend

               if(data.success ) {
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token',data.token)
                setShowLogin(false)
               } else {
                toast.error(data.data.message)
               }
            }
        }
        catch(error) {
            toast.error(data.data.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return()=> {
            document.body.style.overflow = 'unset';
        }
    },[]) // prevent or start scrolling of web page during mounting and unmounting of login page



  return (
    <motion.div initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    className='fixed left-0 top-0 right-0 bottom-0 backdrop-blur-sm z-10 bg-black/30 flex justify-center items-center'>
        <form onSubmit={onSubmitHandler}
        className='relative bg-white p-10 rounded-xl text-slate-600 '>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome back! Please Sign In to continue</p>

           { state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.star_icon}></img>
                <input onChange={e=>setName(e.target.value)} value={name} className='outline-none text-sm' type='text' placeholder='Full Name ' required></input>
            </div>
            }      

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon}></img>
                <input onChange={e=>setEmail(e.target.value)} value={email} className='outline-none text-sm' type='email' placeholder='E-mail ID' required></input>
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon}></img>
                <input onChange={e=>setPassword(e.target.value)} value={password} className='outline-none text-sm' type='password' placeholder='Password' required></input>
            </div>

            <p className='text-sm text-blue-500 cursor-pointer my-4'>Forgot Password?</p>
            <button className='bg-blue-500 w-full text-white py-2 rounded-full cursor-pointer '>{state === 'Login'? 'Login' : 'Create Account' }</button>

            {state === 'Login' ? <p className='mt-5 text-center'>Don't have an Account?<span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
            :
            <p className='mt-3 text-center'>Already have an Account?<span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
            }

            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer'></img>
        </form>
    </motion.div>
  )
}

export default Login