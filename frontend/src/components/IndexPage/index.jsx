import { useState, useEffect } from 'react'
import { getFlowers } from '../../../utils/backend'
import Card from '../Card'
import './styles.css'

export default function IndexPage({ makeFlowerId }) {
    const [flowers, setFlowers] = useState([])
        useEffect(() => {
            getFlowers()
            .then(flowers => setFlowers(flowers))
        }, [])
    return (
        <>
        <div id="flower-list">
            <div>
        {flowers.length > 0 ? flowers.map(flower => <Card key={flower._id} flower={flower} makeFlowerId={makeFlowerId}  /> ) : <p>No flowers yet. We'll be growing some soon.</p>}
        </div>
        </div>
        </>
    )
}