import { Link } from "react-router-dom";
function JobList(props) {
    const jobs = props.jobs;
    const title = props.title;
  
    return (
      <div className="job-list">
        <h2>{title}</h2>
        
        {jobs.map((item) => (
          <div className= "job-content" key={item.id}>
          
          <div className= "job-logo"  >
            <img src= {item.logo} />
          </div>
          <Link to={`/jobs/${item.id}`}>
          <div className="job-preview" >
         
            <h2>{item.title}</h2>
            <p> {item.name}</p>
            <p style={{display:"inline"}}> {item.city} |</p>
            <p style={{display:"inline"}}> {item.state} |</p>
            <p style={{display:"inline"}}> {item.country}</p>
            <p> {item.workLocation}</p>
           
          </div>
         </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default JobList;