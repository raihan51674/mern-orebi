import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name :{type: String, require: true},
    email :{type : String, require: true, unique:true},
    password : {type:String, require:true},
    avatar : {type : String},
    isAdmin : {type:Boolean},
    userCart :{type:Object, default:{}},
},
{minimize:false} //default ar jonno dite hobe
);
const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;