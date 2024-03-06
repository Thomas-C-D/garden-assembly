import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { updateFlower, deleteFlower, getOneFlower } from '../../../utils/backend'
import FlowerSprite from '../FlowerSprite'
import './styles.css'


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

    let buttons = <><div></div></>
    if (localStorage.userId == flower.userId) {
        buttons = <>
                        <div id="flower-buttons">
                    <button
                        onClick={() => { setShowEditForm(true)}}
                        className="detail-button"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="detail-button"
                    >
                        Delete
                    </button>
                </div>

        </>
    }

    if (showEditForm) {
        return (
            <>
            <form 
            onSubmit={handleSubmit}
            id="flower-update"
            >
            <textarea 
                name="content"
                placeholder="Make updates to your post-grad journal here."
                value={editFormData.content}
                onChange={handleInputChange}
                id="input-flower"
            ></textarea>
            <div id="update-buttons">
            <button
                onClick={() => { setShowEditForm(false) }}
                className="detail-button"
            >
                Close
            </button>
            <button
                type="submit"
                className="detail-button"
            >
                Post
            </button>
            </div>
            </form>
            </>
        )
    } else {
        return (
            <div id="flower-block">
               <div id="spriteblock"><FlowerSprite flower={flower}/></div>
                <div id="nameandcontent">
               <h2 id="flower-name">{flower.name}</h2>
               <div id="content-area"><p>{flower.content}</p></div>
            {buttons}
            </div>
            </div>
        )
    }

}