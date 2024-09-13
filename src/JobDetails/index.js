import { Component } from "react";

import "./index.css";

class JobDetails extends Component {
  state = { jobsList: [], param: "" };

  componentDidMount() {
    this.jobsDataFunction();
  }

  jobsDataFunction = async () => {
    const jobsData = await fetch(
      "https://testapi.getlokalapp.com/common/jobs?page=1"
    );

    const data = await jobsData.json();

    const updatedData = data.results.map((each) => ({
      id: each.id,
      title: each.title,
      type: each.type,
    }));

    this.setState({ jobsList: updatedData });
  };

  render() {
    const { jobsList, param } = this.state;
    const jobItem = jobsList.filter((each) => each.id === param);
    const { id, title, type } = jobItem;
    return (
      <div>
        <h1>{id}</h1>
        <p>{title}</p>
        <p>{type}</p>
      </div>
    );
  }
}
export default JobDetails;
