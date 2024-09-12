import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsApp from "./App/index";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import NotFound from "./NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<JobsApp />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
