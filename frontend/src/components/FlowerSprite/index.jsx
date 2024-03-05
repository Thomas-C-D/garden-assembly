import FlowerSprite1 from '../../assets/images/FlowerSprite1.gif'
import FlowerSprite2 from '../../assets/images/FlowerSprite2.gif'
import FlowerSprite3 from '../../assets/images/FlowerSprite3.gif'
import FlowerSprite4 from '../../assets/images/FlowerSprite4.gif'


import './styles.css'

export default function FlowerSprite({flower}) {
    let currentDate = new Date()
    let madeDate = new Date(flower.dateMade)
    let yearNow = currentDate.getFullYear()
    let yearMade = madeDate.getFullYear()
    let difference = (yearNow - yearMade)
    
    let sprite = <img src={FlowerSprite1} id="sprite" />

    if (difference == 1) {
        sprite = <img src={FlowerSprite2} id="sprite" />
    }
    else if (difference == 2) 
    { sprite = <img src={FlowerSprite3} id="sprite" />}
   else if (difference >= 3) {
    sprite = <img src={FlowerSprite4} id="sprite" />
   }

    

    console.log(madeDate)
    console.log("The flower's date: ", yearNow)
    console.log("The current date: ", yearMade)
    


    return (
        <>
       {sprite}
        </>
    )
}