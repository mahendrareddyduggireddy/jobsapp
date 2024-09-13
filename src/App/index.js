import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class JobsApp extends Component {
  state = {
    active: "jobs",
  };

  bookmarksFunction = (event) => {
    this.setState({ active: event.target.value });
  };

  jobsFunction = (event) => {
    this.setState({ active: event.target.value });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="employment-container">
        <h1 className="heading">Employment Portal</h1>
        <h3>Sections</h3>
        <p>Active Section</p>
        <div className="section-selection">
          <input
            type="radio"
            name="section"
            value="jobs"
            id="job"
            onChange={this.jobsFunction}
          />
          <label htmFor="job">Jobs</label>
          <input
            type="radio"
            name="section"
            value="bookmarks"
            id="book"
            onChange={this.bookmarksFunction}
          />
          <label htmFor="book">Bookmarks</label>
        </div>
        <ul className="sections-container">
          {active === "jobs" ? (
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          ) : (
            <li>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default JobsApp;
