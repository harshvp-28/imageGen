import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"

const GenBtn = () => {
  const{user,setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()


    const onClickHandler=()=> {
        if(user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }


  return (
    <motion.div initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='pb-4  text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-700 py-6 md:py-16'>See the Magic. Try Now!</h1>
        <button onClick={onClickHandler}
         className='cursor-pointer inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'>Generate Image
            <img src={assets.star_group} className='h-6'></img>
        </button>
    </motion.div>
  )
}

export default GenBtn