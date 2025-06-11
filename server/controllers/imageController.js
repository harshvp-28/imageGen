import axios from "axios";
import userModel from "../Models/Usermodel.js";
import FormData from "form-data";
export const generateImage = async(req,res)=>{
    try{
        const {userId,prompt} = req.body;
        const user = await userModel.findById(userId)
        if(!user || !prompt) {
            return res.json({success:false,message:"Missing Details!"})
        }

        if(user.creditBalance === 0 || user.creditBalance <0) {
            return res.json({success:false,message:"Insufficient Balance", creditBalance : user.creditBalance})
        }

        const formData = new FormData()
        formData.append('prompt',prompt)

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{     // creates the image by hitting the API
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType : 'arraybuffer'
        })

        const base64Image = Buffer.from(data,'binary').toString('base64')  //converts to png base 64
        const resultImage = `data:image/png;base64,${base64Image}` //result image

        await userModel.findByIdAndUpdate(user._id,{creditBalance : user.creditBalance-1})
        res.json({success : true,message : "Image Generated", creditBalance : user.creditBalance-1, resultImage})


    } catch(error) {
        console.log(error);
        res.json({success : false , message:error.message})
    }
}