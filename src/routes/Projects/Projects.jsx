import "./Projects.scss";
import Project from "../../components/Projects/Project/Project";

function Projects() {
  return (
    <section className="projects">
      <Project name="Restaurant Page" live="https://restaurant-page42.netlify.app" code="https://github.com/ChristopherBenton145/restaurant-page" />
      <Project name="Space Landing Page" live="https://space-landing-page42.netlify.app/" code="https://github.com/TempUsername2436/space-landing-page" />
      <Project name="Multistep Form" live="https://multistep-form8276d2.netlify.app/" code="https://github.com/ChristopherBenton145/multistep-form" />
    </section>
  )
}

export default Projects;
