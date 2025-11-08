import ExperienceDetails from "../components/data-renderers/experience-details"
import Typography from "../components/general/typography"
import { experiences } from "../lib/configurables"

const ExperienceSection = () => {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header Button */}
        <div className="flex justify-center mb-12">
          <button className="px-8 py-3 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors">
            MY EXPERIENCES
          </button>
        </div>

        <div className="space-y-8">
          {experiences?.map((experience, index) => (
            <ExperienceDetails {...experience} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection