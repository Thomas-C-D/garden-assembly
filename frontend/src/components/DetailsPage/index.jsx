import { useState } from 'react'
import CommentSection from '../CommentSection'
import Flower from '../Flower'
import './styles.css'

export default function DetailsPage({myFlowerId, loginStatus}) {
   
  

    return (
        <>
        <div id="details-body" >
            <div id="flower-body">
    <Flower flowerId={myFlowerId} />
</div>
<div id="comments-body">
    <CommentSection flowerId={myFlowerId} loginStatus={loginStatus} />
    </div>
    </div>
    </>
    )
}