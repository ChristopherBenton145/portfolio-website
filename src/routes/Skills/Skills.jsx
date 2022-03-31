import "./Skills.scss";
import TechnicalSkills from "../../components/Skills/TechnicalSkills/TechnicalSkills";
import Tools from "../../components/Skills/Tools/Tools";

function Skills() {
  return (
    <section className="skills">
      <TechnicalSkills />
      <Tools />
    </section>
  )
}

export default Skills;
