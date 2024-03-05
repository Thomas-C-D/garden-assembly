
import './styles.css'

export default function FlowerSprite({flower}) {
    let currentDate = new Date()
    let madeDate = new Date(flower.dateMade)
    let yearNow = currentDate.getFullYear()
    let yearMade = madeDate.getFullYear()
    let difference = (yearNow - yearMade)
    
    let sprite = <img src="../src/assets/images/FlowerSprite1.gif" id="sprite" />

    if (difference == 1) {
        sprite = <img src="../src/assets/images/FlowerSprite2.gif" id="sprite" />
    }
    else if (difference == 2) 
    { sprite = <img src="../src/assets/images/FlowerSprite3.gif" id="sprite" />}
   else if (difference >= 3) {
    sprite = <img src="../src/assets/images/FlowerSprite4.gif" id="sprite" />
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