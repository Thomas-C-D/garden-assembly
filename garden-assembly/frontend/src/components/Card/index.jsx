import { Link } from 'react-router-dom'

export default function Card({ flower, }) {
    return (
    <>
        <figure >
            <p>{flower.dateMade}</p>
            <p>{flower.content}</p>
        </figure>
        </>
    )
}