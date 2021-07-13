import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import JobDetails from "./Components/JobDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/jobs/:id">
              <JobDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;