import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ForumForm from '../components/ForumForm'
import ForumItem from '../components/ForumItem'
import Spinner from '../components/Spinner'
import { getForums, reset } from '../features/forums/forumSlice'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { forums, isLoading, isError, message } = useSelector(
    (state) => state.forums
    )

    useEffect(() => {
    if (isError) {
        console.log(message)
    }

    if (!user) {
        navigate('/login')
    }

    dispatch(getForums())

    return () => {
        dispatch(reset())
    }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
    return <Spinner />
    }

    return (
    <>
        <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Forums Dashboard</p>
        </section>

        <ForumForm />

        <section className='content'>
        {forums.length > 0 ? (
            <div className='forums'>
            {forums.map((forum) => (
                <ForumItem key={forum._id} forum={forum} />
            ))}
            </div>
        ) : (
            <h3>You have not set any Forum</h3>
        )}
        </section>
    </>
)
}

export default Dashboard