import superStarBoi from '../assets/super-star-boi-2.png'
import trollFace from '../assets/troll-face.png'
import thumbsUp from '../assets/thumbs-up.png'


const Header = () => {
  return (
    <nav className="header--nav-container">
              
        <div className="header--nav-left-side">

            {/* <img src={trollFace} alt="troll-logo" />
            + */}
            <img src={superStarBoi} alt="superstar-boi-logo" />
            {/* =
            <img src={thumbsUp} alt="thumbs-up-logo" /> */}
            <span className='header--nav-title'>meme's by superstar.boi</span>
  
        </div>

        <span className='header--nav-describe'>How: print screen it when you got it</span>
    </nav>
  )
}
export default Header