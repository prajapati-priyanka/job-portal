import {Link} from "react-router-dom";

function Navbar(){
    return(   

        <div className= "navbar">
        <h1>Job Portal</h1>
        <div className="links">
          <Link to="/">JOB LISTS</Link>
          <Link to="/create">FOR EMPLOYERS</Link>
        </div>
        
        </div>

    )
}

export default Navbar;

