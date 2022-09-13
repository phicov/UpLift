const mongoose = require('mongoose')

const forumSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', 
    },
    text:{
        type: String,
        required: [true, 'Please add text value']
    }
},{
    timestamps: true,
}
)

module.exports = mongoose.model('Forum', forumSchema)