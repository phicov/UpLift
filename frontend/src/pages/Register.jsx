import {useState, useEffect} from 'react'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    return (
        <div>Register</div>
    )
}

export default Register