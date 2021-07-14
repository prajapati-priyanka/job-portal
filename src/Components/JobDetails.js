import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function JobDetails() {
  const { id } = useParams();
  const {
    data: jobs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/jobs/" + id);

  return (
    <div className="job-details">
      {isPending && <div>Loading..</div>}
      {error && <div> {error}</div>}
      {jobs && (
        <>
          <section className="job-details-content">
            <div className="job-details-preview">
              <h2>{jobs.title}</h2>
              <p> {jobs.name}</p>
              <p style={{ display: "inline" }}>{jobs.workLocation} |</p>
              <p style={{ display: "inline" }}>
                {" "}
                experience: {jobs.experience} years
              </p>
              <p> {jobs.salary}</p>
            </div>
            <div className="job-details-logo">
              <img src={jobs.logo} />
              <div className="btn">
                <button className="btn-primary">Apply</button>
                <button className="btn-secondary">Save</button>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="container-company">
              <h2 style={{ display: "inline" }}>About Company:</h2>
              <p> {jobs.companyBrief}</p>
            </div>

            <div className="container-company">
              <h2 style={{ display: "inline" }}>Skills Required:</h2>
              <ul className="container-company-skills">
                
                  {jobs.skillsRequired.map(item => {
                    return <li>{item}</li>
                  })}
                
              </ul>
            </div>
            <div className="container-company">
              <h4>Employment Type:</h4>
              <p>{jobs.employmentType}</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
export default JobDetails;
