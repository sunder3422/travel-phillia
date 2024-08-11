
export default function Servicebox(props)
{
    return(
            <div className="service-box-outer">
                        <div className="logobox">
                            <div className="logobox-image">
                            <img src={props.myimage} alt="logo passport"/>
                            </div>
                           
                        </div>
                        <div className="service-about">
                            <h3>Documents</h3>
                            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>
                    </div>
    );
}