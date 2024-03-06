import { useState, useEffect } from 'react'
import { postComment, getComments } from '../../../utils/backend'
import Comment from "../Comment"
import './styles.css'

export default function CommentSection({ flowerId, loginStatus }) {
     const [comments, setComments]  = useState([])
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

     let commentButton = <><p></p></>

     if (loginStatus) {
        commentButton = <>
                    <button
                onClick={toggleCreateForm}
                className="detail-button"
            >
                {btnText}
            </button>

        </>
     }
     return  (
        <div id="section-block">
            <div id="comment-top">
            <h2>Comments</h2>
            
            {commentButton}            
            
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}
                >
                <textarea name="content" 
                placeholder="Add a comment"
                    value={createFormData.content}
                    onChange={handleInputChange}
                    id="make-comment"
                ></textarea>
                <button
                type="submit"
                className="detail-button"
                >
                    Post
                </button>
                </form>
            }
            </div>
            <div id="comments-inside">
                <div>
            {commentElements}
            </div>
            </div>
        </div>
     )
}