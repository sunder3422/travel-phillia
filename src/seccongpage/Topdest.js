import "./Topdest.css";
export default function Topdest()
{
    return(
        <div className="trendingDest">
            <div className="topdest-heading">
                    <h1>Top Destination in World</h1>
                    <h3 className="topdest-sub">Best Offers to provide</h3>
            </div>
            <div className="topdest-places">
                <div className="japan topdest-place-go">
                    <div className="topdest-details">
                        <h3>From INR 234543/-</h3>
                        <p>3 Days / 4 Nights</p>
                        <h2>TOKYO, JAPAN</h2>
                    </div>
                </div>
                <div className="switzerland topdest-place-go">
                <div className="topdest-details">
                        <h3>From INR 234543/-</h3>
                        <p>3 Days / 4 Nights</p>
                        <h2>TOKYO, JAPAN</h2>
                    </div>
                </div>
                <div className="bejing topdest-place-go">
                <div className="topdest-details">
                        <h3>From INR 234543/-</h3>
                        <p>3 Days / 4 Nights</p>
                        <h2>TOKYO, JAPAN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}