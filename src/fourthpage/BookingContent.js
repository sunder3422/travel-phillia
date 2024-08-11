export default function BookingContent(props)
{
    return(
        <div className="booking-content">
                    <div className="booking-imagebox"><span>50% OFF</span>
                    <img src={props.backround}/>
                    </div>
                    <div className="booking-detail">
                        <div><b>Switzerland : The Mountains</b></div>
                        <div className="book-price">INR 23,6547/- <s>1,14354/-</s></div>
                        <div>3 Days/4Nights</div>
                    </div>
                    <div className="booking-booknow">
                        <div className="button-book">BOOK NOW</div>
                        <div className="button-call">
                            <img src={props.image} alt="phone logo"/>
                        </div>
                    </div>
                </div>
    );
}