import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://kollurusumanth004:rm4PBU6JlRezmBD7@cluster0.z1qia.mongodb.net/Grab-Hub').then(()=>{
        console.log("DB connected");
    })
}