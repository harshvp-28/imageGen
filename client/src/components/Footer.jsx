import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.div initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} width={150}></img>
        <p className='flex-1 border-l border-gray-600 pl-4 text-sm text-gray-600 max-sm:hidden'>
            Copyright @XYZ.co.in | All Rights Reserved.
        </p>
        <div className='flex gap-2.5 '>
            <img src={assets.facebook_icon} width={35}></img>
            <img src={assets.twitter_icon} width={35}></img>
            <img src={assets.instagram_icon} width={35}></img>
            

        </div>
    </motion.div>
  )
}

export default Footer