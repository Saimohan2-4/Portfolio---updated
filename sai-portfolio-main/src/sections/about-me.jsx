import SkillCard from "../components/data-renderers/skill-card"
import { SKILLS } from "../lib/data"
const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 w-full justify-center items-center">

        {/* Content */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {
            SKILLS.map(skill => (
              <SkillCard key={skill.name} title={skill.name} description={skill.description} image={skill.image} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AboutSection