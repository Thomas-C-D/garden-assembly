import { useState } from 'react'
import { updateComment, deleteComment } from '../../../utils/backend'
import './styles.css'


export default function Comment({ data, refreshComments }) {
    console.log(data)
    console.log(localStorage.userToken)
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        content: data.content
    })


    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShowEditForm(false)
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }

let buttons = <div></div>

if (localStorage.userId == data.userId) {
    buttons =              
    <>  
     <div id="commenting-buttons">
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
            <div id="single-comment">
            <form 
            onSubmit={handleSubmit}
            id="commenting-form"
            >
            <textarea 
                name="content"
                placeholder="Add comment"
                value={editFormData.content}
                onChange={handleInputChange}
                id="onecomment-text"
            ></textarea>
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
            </form>
            </div>
            </>
        )
    } else {
        return (
            <div id="single-comment">
                <p id="comment-name">{data.name}</p>
                <p id="comment-content">{data.content}</p>
                {buttons}
            </div>
        )
    }
}