import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
const Description = () => {
  return (
    <motion.div initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imaginations into visual</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt='' className='w-80 xl:w-98 rounded-lg'></img>
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the Power of AI Image Generator</h2>
                <p className='text-gray-800 mb-4'>Bring your ideas to life with our free AI Image Geneartor. Whether you need stunning visuals or unique images, our tool transforms your text into eye-catching images with just a few-clicks.</p>
                <p className='text-gray-800'>Simply type the prompt, and our cutting edge AI will generate high-quality images in seconds. From product visuals to character designs and potraits, even concepts that don't yet exist can be visualised effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Description