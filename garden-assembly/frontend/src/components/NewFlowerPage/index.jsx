import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postFlower } from '../..//../utils/backend'

export default function NewFlowerPage() {

    const [formData, setFormData] = useState({
        
        content: "",
    })

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const navigate = useNavigate()


     function handleSubmit(event) {
        event.preventDefault()
        postFlower(formData)
        navigate('/')
    }


    return (
        <>
        <form 
        onSubmit={handleSubmit}
        >
            <textarea name="content" 
                placeholder='Leave your hopes for the future here. Update to document your journey towards them.'
                value={formData.content}
                onChange={handleInputChange}
            ></textarea>
            <button
            type='submit'
            >
                Plant flower
            </button>
        </form>
        
        </>
    )
}