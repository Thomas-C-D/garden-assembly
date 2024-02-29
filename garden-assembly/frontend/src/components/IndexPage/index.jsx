import { useState, useEffect } from 'react'
import { getFlowers } from '../../../utils/backend'
import { Link } from "react-router-dom";
import Card from '../Card'


export default function IndexPage() {
    const [flowers, setFlowers] = useState([])
        useEffect(() => {
            getFlowers()
            .then(flowers => setFlowers(flowers))
        }, [])
    return (
        <>
        {flowers.length > 0 ? flowers.map(flower => <Card key={flower.id} flower={flower}   /> ) : <p>No flowers yet. We'll be growing some soon.</p>}
        </>
    )
}