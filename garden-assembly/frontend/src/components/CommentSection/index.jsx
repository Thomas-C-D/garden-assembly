import { useState, useEffect } from 'react'
import { postComment, getComments } from '../../../utils/backend'
import Comment from "../Comment"

export default function commentSection({ flowerId }) {
     const [comment, setComments]  = useState([])
     const [showCreateForm, setShowCreateForm] = useState(false)
     const [createFormData, setCreateFormData] = useState({
        content: ''
     })

     useEffect(() => {
        getComments(flowerId)
        .then(comments => setComments(comments))
     }, [])

     function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
     }

     function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
     }

     function refreshComments() {
        getComments(flowerId)
        .then(newCommentData => setComments(newCommentData))
     }

     function handleSubmit(event) {
        event.preventDefault()
        setCreateFormData({
            content: ''
        })
        setShowCreateForm(false)
        postComment({ ...createFormData, flowerId: flowerId })
        .then(() => refreshComments())
     }

     let commentElements = [<p>No comments yet.</p>]
     if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
     }

     let btnText = 'Create'
     if (showCreateForm) {
        btnText = 'Close'
     }

     return  (
        <div>
            <h2>Comments</h2>
            <button
                onClick={toggleCreateForm}
            >
                {btnText}
            </button>
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}
                >
                <textarea name="content" 
                placeholder="Add a comment"
                    value={createFormData.content}
                    onChange={handleInputChange}
                ></textarea>
                <button
                type="submit"
                >
                    Post
                </button>
                </form>
            }
        </div>
     )
}