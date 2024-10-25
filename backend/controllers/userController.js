import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"


//login user
const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await userModel.findOne({email});

        if (!user){
            return res.json({success:false,message:"User doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createToken(user._id);
        res.json({
            success:true,
            token: token
        })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }

}

const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const registerUser =async (req,res)=>{
    const {name,email,password}=req.body;

    try {
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User Already Exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a Vaild Email"})
        }
        if (password.length<6){
            return res.json({success:false,message:"Please enter a Strong Password"})
        }

        // hashing user password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser=new userModel({
            name: name,
            email: email,
            password:hashedPassword
        })

        const user=await newUser.save()
        const token =createToken(user._id)
        res.json({
            success:true,token
        })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }

}

export {loginUser,registerUser};