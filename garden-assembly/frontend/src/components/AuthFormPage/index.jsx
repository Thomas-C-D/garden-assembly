import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { signUp, logIn } from '../../../utils/backend'


export default function AuthFormPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const { formType } = useParams()
    let actionText
    formType === 'login' ? actionText = 'Log in' : actionText = 'Sign up'


    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        if (formType === 'login') {
            const { token } = await logIn(formData)
            localStorage.setItem('userToken', token)
        } else {
            const { token } = await signUp(formData)
            localStorage.setItem('userToken', token)
        }
        navigate('/')
    }
    return (
        <div>
            <div>
                <h2>{actionText}</h2>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name"
                            name="name"
                            type="name"
                            required
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            name='password'
                            type='password'
                            minLength='6'
                            required
                            placeholder="Password"    
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                        >
                            {actionText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}