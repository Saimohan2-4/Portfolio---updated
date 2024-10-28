import Typography from "../components/general/typography"
import { skills } from "../lib/configurables"
import TechDetails from "../components/data-renderers/tech-details"

const SkillsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <Typography variant="subtitle" className="max-w-xl text-center font-extralight opacity-70">
                    {`The skills, tools and technologies I am really good at:`}
                </Typography>
            </div>

            <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                {skills.map((technology, index) => (
                    <TechDetails {...technology} key={index} />
                ))}
            </div>
        </>
    )
}

export default SkillsSection