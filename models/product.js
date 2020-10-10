const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      price:{
          type:String,
          required:true
      },
      description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    defaultQuantity:{
        type:Number,
        default: 1
    },


});
module.exports  = mongoose.model('products', productSchema);
