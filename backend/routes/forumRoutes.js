const express = require('express')
const router = express.Router()
const { getForum, setForum, updateForum, deleteForum } = require('../controllers/forumController')

router.route('/').get(getForum).post(setForum)
router.route('/:id').delete(deleteForum).put(updateForum)



module.exports = router