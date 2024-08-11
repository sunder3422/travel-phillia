
import "./Whyus.css";
export default function Whyus()
{
    return(
        <div className="whyuspage-main">
            <div className="whyushading">
                <h1>WHY US?</h1>
            </div>
            <div className="whyus-details">
                <p>Multiple benifits given by us so best to choose us.</p>
            </div>
            <div className="whyus-content">
                <div className="box-whyus">
                    <div className="box-whyus-upper"></div>
                    <div className="box-whyus-lower">
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        <button className="whyus-knomorebutton">KNOW MORE</button>
                    </div>
                </div>

                <div className="box-whyus">
                    <div className="box-whyus-upper uppertwo"></div>
                    <div className="box-whyus-lower lowertwo">
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        <button className="whyus-knomorebutton buttontwo">KNOW MORE</button>
                    </div>
                </div>

                <div className="box-whyus">
                    <div className="box-whyus-upper"></div>
                    <div className="box-whyus-lower">
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        <button className="whyus-knomorebutton">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}