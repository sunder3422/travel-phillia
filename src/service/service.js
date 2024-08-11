import "./service.css";
import passportlogo from "../assets/logos/passport.png";
import travelplane from "../assets/logos/travel.png";
import photography from "../assets/logos/photography.png";
import setting from "../assets/logos/web-setting.png";
import Servicebox from "./Servicebox";

export default function Service()
{
    return(
        <div className="service-main">
            <div className="service-heading">
                <h4 className="sub-service-heading">CATEGORIY</h4>
                <h1>We Offer Best Service</h1>
            </div>
                <div className="service-box">
                    <Servicebox myimage={passportlogo}/>
                    <Servicebox myimage={travelplane}/>
                    <Servicebox myimage={photography}/>
                    <Servicebox myimage={setting}/>
                </div>
        </div>
    );
}