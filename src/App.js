import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import JobsApp from "./App/index";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import NotFound from "./NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<JobsApp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/:id" element={<JobDetails />} />
        <Route element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
