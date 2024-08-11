import "./Navigation.css";
import logo from "../assets/logos/travelphilia.png";
import Gmail from "../assets/logos/gmail.png";
import Instagram from "../assets/logos/instagram.png";
import Facebook from "../assets/logos/facebook.png";
import Twitter from "../assets/logos/twitter.png";
import Phone from "../assets/logos/phone-call.png";
export default function Navigation()
{
    return(
        <div className="nav">
            <div className="nav-main">
                <div className="nav-logo">
                    <div className="travelLogo">
                        <img alt="logo" src={logo}/>
                    </div>
                    <div className="travellogoname">
                    Travel-PHILIA
                    </div>
                </div>
                <div className="nav-menu">
                    <div className="contact-no">
                        <div className="phone-img"><img src={Phone} /></div>
                        <div className="phoneno">+91 9856436253</div>
                    </div>
                    <div className="contact-social">
                        <div className="gmail social-logo"><img src={Gmail} alt="img"/></div>
                        <div className="twitter social-logo"><img src={Twitter} alt="img"/></div>
                        <div className="Instagram social-logo"><img src={Instagram} alt="img"/></div>
                        <div className="Facebook social-logo"><img src={Facebook} alt="img"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}