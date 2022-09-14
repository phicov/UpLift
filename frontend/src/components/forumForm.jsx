import { useState } from "react"
import { useDispatch } from "react-redux"
import { createForums } from '../features/forums/forumSlice'


function ForumForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createForums({text}))
        setText('')
    }

    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Forum</label>
                <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Create Forum</button>
            </div>
        </form>
    </section>
    )
}

export default ForumForm