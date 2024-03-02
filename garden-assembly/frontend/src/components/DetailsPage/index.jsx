import { useState } from 'react'
import CommentSection from '../CommentSection'
import Flower from '../Flower'

export default function DetailsPage({myFlowerId}) {
   
  

    return (
        <>
    <Flower flowerId={myFlowerId} />


    <CommentSection flowerId={myFlowerId} />
    </>
    )
}