import JobList from "./JobList";
import useFetch from "../useFetch";

function Home() {
  const { data: jobs, isPending,error } = useFetch("http://localhost:8000/jobs/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {jobs && <JobList jobs={jobs} />}
    </div>
  );
}

export default Home;

// data:blogs means data here is used as a name blog