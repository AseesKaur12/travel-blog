import { Link } from "react-router-dom"
import topimg from './icon.jpg'
import "./topbar.css"

export default function TopBar(){
    return(
        <div className="top">
            <div className="topleft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            </div>
            
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                </ul>
            </div>
            <div className="topright">
                <img className="topImg" src={topimg} alt=" "></img>
                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>

    )
}