
import "./Booking.css";
import call from "../assets/logos/phone-call.png";
import swit from "../assets/country/switzerland.jpg";
import china from "../assets/country//Beijing.jpg";
import jpn from "../assets/country/japan.jpg";
import BookingContent from "./BookingContent";

export default function Booking()
{
    return(
        <div className="bookingpage-main">
            <div className="linebox"></div>
            <h4 className="sub-bookingheading">BOOKING</h4>
                <h1>Book your seats</h1>
            <div className="booking-box">
            <div className="country"><h1>EUROPE</h1></div>
                <BookingContent image={call} backround={swit}/>
                <BookingContent image={call} backround={china}/>
                <BookingContent image={call}backround={jpn}/>
                <BookingContent image={call} backround={swit}/>
                
            </div>
            
            <div className="booking-box">
            <div className="country"><h1>INDIA</h1></div>
                <BookingContent image={call} backround={swit}/>
                <BookingContent image={call} backround={china}/>
                <BookingContent image={call}backround={jpn}/>
                <BookingContent image={call} backround={swit}/>
              
                
            </div>
        </div>
    );
}