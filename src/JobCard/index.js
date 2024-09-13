import "./index.css";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { card } = props;
  const { id, title } = card;
  return (
    <Link to={`/${id}`} className="card-style">
      <li>
        <h2>{id}</h2>
        <p className="para">{title}</p>
      </li>
    </Link>
  );
};
export default JobCard;
