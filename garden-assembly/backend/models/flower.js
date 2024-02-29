const mongoose = require('mongoose')

const flowerSchema = new mongoose.Schema(
    {
    name: {
        type: String,
       
    },
    content: {
        type: String,
        required: true,
    },
    dateMade : {
        type: Date,
        
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

},

 {timestamps: true}
)

module.exports = mongoose.model("Flower", flowerSchema)