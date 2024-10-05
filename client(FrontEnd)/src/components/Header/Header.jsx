import { Link } from "react-router-dom"
import JourneyNookLogo from "../../assets/logos/JourneyNookLogo.svg";
// import LoginIcon from "../../assets/icons/login.svg";
import "./Header.scss";

function Header() {
    return (
        <div className="header">
            {/* <div className="header__balance">balancer</div> */}
            <Link className="header__logo" to="/">
                <img className="header__logo-img" src={JourneyNookLogo} />
            </Link>
            {/* <Link className="header__login1"  to="/login">
                <img className="header__login1-icon" src={LoginIcon} />
            </Link>
            <Link className="header__login2" to="/login">Login</Link> */}
        </div>
    );
}

export default Header