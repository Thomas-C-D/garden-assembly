import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { signUp, logIn } from '../../../utils/backend'
import "./styles.css"

export default function AuthFormPage({ setLoginStatus }) {

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


    let hasName
    formType === 'signup' ? hasName = true : hasName = false

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        if (formType === 'login') {
            const { token, userId } = await logIn(formData)
            localStorage.setItem('userToken', token)
            localStorage.setItem('userId', userId)
            setLoginStatus(true)
        } else {
            const { token, userId } = await signUp(formData)
            localStorage.setItem('userToken', token)
            localStorage.setItem('userId', userId)
            setLoginStatus(true)
        }
        navigate('/')
    }
    return (
        <div id="user-form">
            <div>
                <h2>{actionText}</h2>
                <form  onSubmit={handleSubmit}>
                   { hasName && 
                    <div>
                        <label htmlFor="name"  >Name</label>
                        <input 
                            id="name"
                            name="name"
                            type="name"
                            required
                            placeholder="Name"
                            className="user-input"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        </div>
                   
                        }
                        <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            className="user-input"
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
                            className="user-input"
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