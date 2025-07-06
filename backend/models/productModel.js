const { urlencoded } = require("express");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please Enter product Name"],
        trim: true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Disecription"]
    },
    price:{
        type:Number,
        required:["Please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],
    category:{
        type:String,
        require:[true,"Please Enter Product Category"],
    },
    stock:{
        type:Number,
        required:[true,"Please Enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numofReviews:{
        type:String,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);