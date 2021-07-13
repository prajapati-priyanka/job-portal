  
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry!</h1>
      <p>page not found</p>
      <p>
        Let's go <Link to="/"> home </Link> and and try from there...
      </p>
    </div>
  );
}
export default NotFound;