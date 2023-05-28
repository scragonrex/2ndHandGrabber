import mongoose from "mongoose";
const UserScheme = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
}, {timestamps:true});

const User = mongoose.model("User", UserScheme);
export default User;

