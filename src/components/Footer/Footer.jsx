import { Link } from "react-router-dom";
import JourneyNookLogo from "../../assets/logos/JourneyNookLogo.svg";
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import "./Footer.scss";

export default function Footer() {
    return (
        <div className='footer'>
            <Link className="footer__logo" to="/">
                <img className="footer__logo-img" src={JourneyNookLogo} />
            </Link>
            <div className="footer__social">
                <a className="footer__social-link" href="mailto:blikebahar76@gmail.com">
                    <img className="footer__social-link-img" src={emailIcon} />
                </a>
                <a className="footer__social-link" href="https://github.com/b-like-bahar">
                    <img className="footer__social-link-img" src={githubIcon} />
                </a>
                <a className="footer__social-link" href="http://www.linkedin.com/in/bahareh-hamzeh">
                    <img className="footer__social-link-img" src={linkedinIcon} />
                </a>
            </div>
            <p className="footer__copyRight">
                &copy; {new Date().getFullYear()} JourneyNook. All Rights Reserved.
            </p>
        </div>

    )
}