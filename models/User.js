import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  _id:{ type : String,requied:true},
  name:{type : String,requied:true},
  email:{type : String,requied:true,unique:true},
  imageUrl:{type : String,requied:true},
  cartItems:{type:Object,default:{}},

},{minimize:false});
const User = mongoose.models.user || mongoose.model('user',userSchema);
export default User;