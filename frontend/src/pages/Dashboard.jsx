import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ForumForm from '../components/forumForm'

function Dashboard() {
    const navigate = useNavigate()

    const {user} = useSelector((state) =>state.auth)
    
    useEffect(() => {
        if(!user){
        navigate('/login')
        }
    }, [user, navigate])
    
    
    return (
    <>
        <section className='heading'>
            <h1>Welcome {user && user.name}</h1>
            <p>Forum Dashboard</p>
        </section>
        
        <ForumForm />
    </>
    )
}

export default Dashboard