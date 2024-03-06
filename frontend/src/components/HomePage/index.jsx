import { Link } from "react-router-dom"
import HomeSprite from '../../assets/images/HomeSprite.gif'
import './styles.css'

export default function HomePage() {
    return (
        <>
        <div id="homeblock">
        <img src={HomeSprite} alt="Garden Assembly" id="homesprite" />
        <p id='home-welcome'>Welcome to our graduation garden. Sign up and leave a flower representing your hopes for the future post-grad. We hope you'll come back to this little bit of your history from time to time and enjoy seeing how our garden has grown together.</p>
        </div>
        </>
    )
}