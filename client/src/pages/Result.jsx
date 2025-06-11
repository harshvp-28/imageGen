import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'

const Result = () => {
  const[image,setImage] = useState(assets.sample_img_1)
  const[isImageLoaded, setIsImageLoaded] = useState(false)
  const[loading, setLoading] = useState(false);
  const[input,setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHanlder = async(e)=> {
    e.preventDefault()
    setLoading(true)
    if(input) {
      const image = await generateImage(input)
      if(image) {
        setIsImageLoaded(true)
        setImage(image)


      }
    }
    setLoading(false)
  }


  

  return (
    <form onSubmit={onSubmitHanlder}
     className='flex flex-col items-center justify-center min-h-[90vh]'>
      <div>
        <div className='relative'>
          <img src={image} className='max-w-sm rounded'></img>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w=0'}`}></span>
        
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading.....</p>
      </div>
      
      {
        !isImageLoaded && 
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
        <input onChange={e=> setInput(e.target.value)} value={input} // whatever we will typw will be stored in input state
         type='text' placeholder='Describe what you want to genearte' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'></input>
        <button type='submit' className='cursor-pointer bg-zinc-800 px-10 sm:px-16 py-3 rounded-full text-white'>Generate</button>
        </div>

      }

      {
        isImageLoaded &&
        <div className='flex gap-2 justify-center flex-wrap text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={()=>{setIsImageLoaded(false)}}
        className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }
    </form>
    
  )
}

export default Result