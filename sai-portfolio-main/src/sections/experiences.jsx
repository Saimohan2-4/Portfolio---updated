import ExperienceDetails from "../components/data-renderers/experience-details"
import Typography from "../components/general/typography"
import { experiences } from "../lib/configurables"

const ExperienceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">

        <Typography variant="subtitle" className="max-w-xl text-center font-extralight opacity-70">
          {`< Here, you can know me a little more and see my whole experience as a Data Analyst. />`}
        </Typography>
      </div>

      {experiences?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </>
  )
}

export default ExperienceSection
