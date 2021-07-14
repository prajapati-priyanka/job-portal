import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [logo, setLogo] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [companyBrief, setCompanyBrief] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperienceType] = useState("");

  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  // form submit

  function submitHandler(event) {
    // it prevents automatically refreshing of a page
    event.preventDefault();
    
    const jobsAdded = { title, name, city, state, country,workLocation, logo, workLocation, companyBrief, skillsRequired,employmentType,experience };
      // console.log(blogsAdded);

    setIsPending(true);

    // a POST request to add the blog to existing db.json

    fetch("http://localhost:8000/jobs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobsAdded)
    }).then(() => {
    //   alert("For Online json-server Changes aren't persisted between calls.. Check in console for successful API call");
    //   console.log("New Blog Added");
      setIsPending(false);
      // history.go(-1);
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h1>Start hiring today.</h1>
      <h2>Post A Job</h2>
      

      <form onSubmit={submitHandler}>
        <label>Job Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Company Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label>State:</label>
        <input
          type="text"
          required
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <label>Country:</label>
        <input
          type="text"
          required
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <label>Work Location:</label>
        <input
          type="text"
          required
          value={workLocation}
          onChange={(event) => setWorkLocation(event.target.value)}
        />
        <label>About Company:</label>
        <textarea
          required 
          value={companyBrief}
          onChange={(event) => setCompanyBrief(event.target.value)}
        />
        <label>Skills Required:</label>
        <textarea
          required 
          value={skillsRequired}
          onChange={(event) => setSkillsRequired(event.target.value.split(","))}
        />
        <label>Employment Type:</label>
        <input
        type="text"
          required 
          value={employmentType}
          onChange={(event) => setEmploymentType(event.target.value)}
        />
        <label>Experience:</label>
        <input
        type="text"
          required 
          value={experience}
          onChange={(event) => setExperienceType(event.target.value)}
        />

        <label>Company Logo Link:</label>
        <input
          type="text"
          required
          value={logo}
          onChange={(event) => setLogo(event.target.value)}
        />

        {!isPending && <button>Add Job</button>}
        {isPending && <button disabled>Adding Blog..</button>}
      </form>
    </div>
  );
}

export default Create;