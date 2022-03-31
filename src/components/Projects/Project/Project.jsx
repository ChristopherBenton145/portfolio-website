import "./Project.scss";

function Project({ name, live, code }) {
  return (
    <div className="project">
      <div className="image"></div>
      <h3>{name}</h3>
      <button><a href={live} target="_blank">Live</a></button>
      <button><a href={code} target="_blank">Code</a></button>
    </div>
  )
}

export default Project;
