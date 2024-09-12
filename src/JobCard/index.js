import "./index.css";
import JobDetails from "../JobDetails";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { card, jbs } = props;
  const { id, title } = card;
  return (
    <Link to={`/${id}`} className="card-style">
      <li>
        <h2>{id}</h2>
        <p className="para">{title}</p>
        <JobDetails jbsList={jbs} ids={id} />
      </li>
    </Link>
  );
};
export default JobCard;
