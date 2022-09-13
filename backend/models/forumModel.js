const mongoose = require('mongoose')

const forumSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please add text value']
    }
},{
    timestamps: true,
}
)

module.exports = mongoose.model('Forum', forumSchema)