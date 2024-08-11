import Navigation from "../nav/Navigation";
import "./Home.css";

export default function Home()
{
    return(
        <div className="home-page">
            <div className="home-page-heading">
                <h1>TRAVEL WITH US</h1>
                <p className="homepage-about">
                Travel with us. we help you travel to your dream destination.
                we will provide.
                </p>
                <h4>KNOW MORE</h4>
                <div className="homepage-search-form">
                    <div className="mainsearchbar">
                        <div className="inputbox-div">
                            <input type="text" className="destination"
                            placeholder="Let's search where you want to go.."/>
                        </div>
                        <div className="search">SEARCH</div>
                    </div>
                </div>
                    {/* <input type="text" placeholder="DESTINATION" className="destination"></input>
                    
                    <input type="text" placeholder="DAY" className="day"></input>
                    <input type="text" placeholder="MONTH" className="month"></input>
                    <input type="text" placeholder="YEAR" className="year"></input>
                    <input type="date" placeholder="YEAR" className="year"></input> */}
                   
                
                {/* <div className="search">SEARCH</div> */}
                {/* <div className="homepage-reach">
                    <div className="reach">
                        <p className="client">5000+</p>
                        <p className="client">Clients</p>
                    </div>
                    <div className="reach">
                        <p className="client">5000+</p>
                        <p className="client">Clients</p>
                    </div>
                    <div className="reach">
                        <p className="client">5000+</p>
                        <p className="client">Clients</p>
                    </div>
                    <div className="reach">
                        <p className="client">5000+</p>
                        <p className="client">Clients</p>
                    </div>
                    <div className="reach">
                        <p className="client">5000+</p>
                        <p className="client">Clients</p>
                    </div>
                </div> */}
                
            </div>
            
        </div>
    );
}