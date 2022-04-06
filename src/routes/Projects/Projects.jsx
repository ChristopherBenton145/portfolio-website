import "./Projects.scss";
import Project from "../../components/Projects/Project/Project";

function Projects() {
  return (
    <section className="projects">
      <Project name="Restaurant Page" live="https://restaurant-page42.netlify.app" code="https://github.com/ChristopherBenton145/restaurant-page" />
      <Project name="Premium Landing Page" live="https://premium-landing-page.netlify.app/" code="https://github.com/ChristopherBenton145/premium-landing-page" />
      <Project name="Space Landing Page" live="https://space-landing-page42.netlify.app/" code="https://github.com/TempUsername2436/space-landing-page" />
      <Project name="Multistep Form" live="https://multistep-form42.netlify.app" code="https://github.com/ChristopherBenton145/multistep-form" />
      <Project name="Snake Game" live="https://snake-game42.netlify.app" code="https://github.com/ChristopherBenton145/snake-game" />
    </section>
  )
}

export default Projects;
