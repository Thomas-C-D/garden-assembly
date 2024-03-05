import { Link } from 'react-router-dom'
import FlowerSprite from '../FlowerSprite'
import './styles.css'
export default function Card({ flower, makeFlowerId }) {
    
    return (
    <>
        <figure id="flower-list" >
            <FlowerSprite flower={flower} />
           <Link to={"/details/"}  onClick={() => makeFlowerId(flower._id)} > <p>{flower.name}</p></Link>
            <p>{flower.dateMade}</p>
            
        </figure>
        </>
    )
}