export default function Flower({ flower }) {
    return (
        <>
        <figure style="display: flex">
            <div><h3>{flower.name}</h3></div>
            <div><h3>{flower.content}</h3></div>
        </figure>
        </>
    )
}