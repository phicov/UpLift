//@desc Get Forums
//@route GET /api/forums
//@access Private
const getForum = (req,res) =>{
    res.status(200).json({ message: 'Get Forums'})
}

//@desc set Forums
//@route POST /api/forums
//@access Private
const setForum = (req, res) => {
    res.status(200).json({message: 'Set Forum'})
}


//@desc Update Forums
//@route PUT /api/forums/:id
//@access Private
const updateForum = (req,res) =>{
    res.status(200).json({message: `Update Forum ${req.params.id}`})
}

//@desc Delete Forums
//@route DELETE /api/forums/:id
//@access Private
const deleteForum = (req,res) =>{
    res.status(200).json({message: `Delete Forum ${req.params.id}`})
}


module.exports = {
    getForum,
    setForum,
    updateForum,
    deleteForum
}