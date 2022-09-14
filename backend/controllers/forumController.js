const asyncHandler = require('express-async-handler')

const Forum = require('../models/forumModel')

//@desc Get Forums
//@route GET /api/forums
//@access Private
const getForum = asyncHandler(async (req,res) => {
    const forum = await Forum.find({ user: req.user.id })

    res.status(200).json(forum)
})

//@desc set Forums
//@route POST /api/forums
//@access Private
const setForum = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const forum = await Forum.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(forum)
})


//@desc Update Forums
//@route PUT /api/forums/:id
//@access Private
const updateForum = asyncHandler(async (req,res) =>{
    const forum = await Forum.findById(req.params.id)

    if(!forum){
        res.status(400)
        throw new Error('Forum not found')
    }

    const updatedForum = await Forum.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedForum)
})

//@desc Delete Forums
//@route DELETE /api/forums/:id
//@access Private
const deleteForum = asyncHandler(async (req,res) =>{
    const forum = await Forum.findById(req.params.id)

    if(!forum){
        res.status(400)
        throw new Error('Forum not found')
    }

    await forum.remove({ id: req.params.id })


    res.status(200).json({message: `Delete Forum ${req.params.id}`})
})


module.exports = {
    getForum,
    setForum,
    updateForum,
    deleteForum
}