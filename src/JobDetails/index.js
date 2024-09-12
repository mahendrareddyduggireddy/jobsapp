import "./index.css";

const JobDetails = (props) => {
  const { jbsList, ids } = props;
  console.log(jbsList);
  const item = jbsList.filter((each) => each.id === ids);
  const { id, title, type } = item;
  return (
    <div>
      <h1>{id}</h1>
      <p>{title}</p>
      <p>{type}</p>
    </div>
  );
};
export default JobDetails;
