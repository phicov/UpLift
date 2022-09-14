const express = require('express')
const router = express.Router()
const { getForum, setForum, updateForum, deleteForum } = require('../controllers/forumController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getForum).post(protect, setForum)
router.route('/:id').delete(protect, deleteForum).put(protect, updateForum)



module.exports = router