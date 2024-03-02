import { Link } from 'react-router-dom'

export default function Card({ flower, makeFlowerId }) {
    
    return (
    <>
        <figure >
           <Link to={"/details/"}  onClick={() => makeFlowerId(flower._id)} > <p>{flower.name}</p></Link>
            <p>{flower.dateMade}</p>
            
        </figure>
        </>
    )
}