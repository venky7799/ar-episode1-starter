import React from "react";
import {Link} from "react-router-dom";

const SideHeading=()=>{
    return(
        <div className="sidebar pagee">
          
                {/* <div className="vertical">
                    <a href="http://localhost:3000/solar">solar ENERGY</a>
                    <a href="http://localhost:3000/Cc">cc CAMERAS</a>                
                </div> */}
                  <div className="vertical">
                <ul>
                    <Link to="/solar">
                            <li>Solar</li>
                    </Link>
                    <Link to="/Cc">
                            <li>
                                cc Camera
                            </li>
                    </Link>
                </ul>
            </div>
        </div>
       
    );
}


export default SideHeading;