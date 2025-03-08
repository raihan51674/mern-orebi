import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _type: {type:String},
  name: {type:String, require:true},
  images :{type:Array, require:true},
  price : {type:Number, require:true},
  discountPercent: {type:Number},
  category :{type:String, require:true},
  brand : {type:String},
  badge :{type:Boolean},
  isAvailable:{type:Boolean},
  offer: { type: Boolean, default: false },
  description :{type:String, require:true},
  tags:{type:Array},



});
const productModel = mongoose.models.product || mongoose.model('product',productSchema);
export default productModel;