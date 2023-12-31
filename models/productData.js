const { string, array, boolean } = require('joi')
const mongoose = require ('mongoose')
const Product = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
    stock:{
        type:Number,    
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'brand',
        // required:true
        
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports= mongoose.model('products',Product)