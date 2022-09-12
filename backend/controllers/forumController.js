const asyncHandler = require('express-async-handler')

//@desc Get Forums
//@route GET /api/forums
//@access Private
const getForum = asyncHandler(async (req,res) =>{
    res.status(200).json({ message: 'Get Forums'})
})

//@desc set Forums
//@route POST /api/forums
//@access Private
const setForum = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set Forum'})
})


//@desc Update Forums
//@route PUT /api/forums/:id
//@access Private
const updateForum = asyncHandler(async (req,res) =>{
    res.status(200).json({message: `Update Forum ${req.params.id}`})
})

//@desc Delete Forums
//@route DELETE /api/forums/:id
//@access Private
const deleteForum = asyncHandler(async (req,res) =>{
    res.status(200).json({message: `Delete Forum ${req.params.id}`})
})


module.exports = {
    getForum,
    setForum,
    updateForum,
    deleteForum
}