import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        registerDate:{type:Date,default:Date.now},
        Stock:Number
    }
);

const producto=mongoose.model("producto",productoSchema);

export default producto;