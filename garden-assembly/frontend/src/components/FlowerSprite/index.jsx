

export default function FlowerSprite({flower}) {
    let currentDate = new Date()
    let madeDate = new Date(flower.dateMade)
    let yearNow = currentDate.getFullYear()
    let yearMade = madeDate.getFullYear()
    let difference = (yearNow - yearMade)
    

    let sprite = <p>{difference} Years</p>
    console.log(madeDate)
    console.log("The flower's date: ", yearNow)
    console.log("The current date: ", yearMade)
   
    return (
        <>
        {sprite}
        </>
    )
}