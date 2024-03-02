import { useState } from 'react'
import { updateComment, deleteComment } from '../../../utils/backend'

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        content: data.content
    })

    console.log(data)

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

    if (showEditForm) {
        return (
            <>
            <form 
            onSubmit={handleSubmit}
            
            >
            <textarea 
                name="content"
                placeholder="Add comment"
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
                <p>{data.name}</p>
                <p>{data.content}</p>
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