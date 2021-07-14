import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
function JobList(props) {
    const jobs = props.jobs;
    const title = props.title;
  
    return (
      <div className="job-list">
        <h2>{title}</h2>
        
        {jobs.map((item) => (
          <div  key={item.id}>
          <Link to={`/jobs/${item.id}`} className= "job-content">
          <div className= "job-logo"  >
            <img src= {item.logo} />
          </div>
         
          <div className="job-preview" >
         
            <h2>{item.title}</h2>
            <p> {item.name}</p>
            <p style={{display:"inline"}}> {item.city} |</p>
            <p style={{display:"inline"}}> {item.state} |</p>
            <p style={{display:"inline"}}> {item.country}</p>
            <p> <IoLocationOutline  style={{verticalAlign:"baseline"}}/>{item.workLocation}</p>
           
          </div>
         </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default JobList;