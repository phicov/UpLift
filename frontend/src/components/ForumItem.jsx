import { useDispatch } from 'react-redux'
import { deleteForum } from '../features/forums/forumSlice'

function ForumItem({ forum }) {
    const dispatch = useDispatch()

    return (
        <div className='forum'>
            <div>{new Date(forum.createdAt).toLocaleString('en-US')}</div>
            <h2>{forum.text}</h2>
            <button onClick={() => dispatch(deleteForum(forum._id))} className='close'>
            X
            </button>
        </div>
    )
}

export default ForumItem