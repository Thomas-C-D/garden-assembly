import { Link } from 'react-router-dom'
import FlowerSprite from '../FlowerSprite'
import './styles.css'
export default function Card({ flower, makeFlowerId }) {
    
    return (
    <>
        <figure id="flower-card" >
            <FlowerSprite flower={flower} />
           <div id="card-link"><Link to={"/details/"}  onClick={() => makeFlowerId(flower._id)} > <p>{flower.name}</p></Link></div>
           
            
        </figure>
        </>
    )
}