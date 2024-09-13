import { Component } from "react";
import JobCard from "../JobCard";
import "./index.css";

class Jobs extends Component {
  state = { jobsList: [] };

  componentDidMount() {
    this.jobsDataFunc();
  }

  jobsDataFunc = async () => {
    const jobsData = await fetch(
      "https://testapi.getlokalapp.com/common/jobs?page=1"
    );
    const data = await jobsData.json();
    console.log(data.results);
    const updatedData = data.results.map((each) => ({
      id: each.id,
      title: each.title,
    }));
    this.setState({ jobsList: updatedData });
  };

  render() {
    const { jobsList } = this.state;
    return (
      <div className="jobs-container">
        <h1 className="title">Jobs</h1>
        <ul className="jobs-list">
          {jobsList.map((each) => (
            <JobCard card={each} key={each.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Jobs;
