import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    timestamp:{
        type:String,
        require:true
    },
})
const User = mongoose.model('user',userSchema)

export default User