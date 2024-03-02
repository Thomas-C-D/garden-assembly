import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { updateFlower, deleteFlower, getOneFlower } from '../../../utils/backend'
import FlowerSprite from '../FlowerSprite'

export default function Flower({ flowerId }) {
    const [flower, setFlower] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        content: flower.content,
    })

    const navigate = useNavigate()
    
    useEffect(() => {
        getOneFlower(flowerId)
        .then(flower =>  {
            setFlower(flower)})
        
    }, [])
    
    function refreshFlower() {
        getOneFlower(flowerId) 
            .then(newFlowerData => setFlower(newFlowerData))
    } 

    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
            event.preventDefault() 
            setShowEditForm(false)
            updateFlower(editFormData, flowerId)
                .then(() => refreshFlower())
    }

    function handleDelete() {
       
        deleteFlower(flowerId)
        navigate('/')
    }

    if (showEditForm) {
        return (
            <>
            <form 
            onSubmit={handleSubmit}
            
            >
            <textarea 
                name="content"
                placeholder="Make updates to your post-grad journal here."
                value={editFormData.content}
                onChange={handleInputChange}
            ></textarea>
            <button
                onClick={() => { setShowEditForm(false) }}
            >
                Close
            </button>
            <button
                type="submit"
            >
                Post
            </button>
            </form>
            </>
        )
    } else {
        return (
            <div>
               <FlowerSprite flower={flower}/>
               <p>{flower.name}</p>
               <p>{flower.content}</p>
               
                <div>
                    <button
                        onClick={() => { setShowEditForm(true)}}
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }

}