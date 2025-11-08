import Typography from "../components/general/typography"
import { skills } from "../lib/configurables"
import TechDetails from "../components/data-renderers/tech-details"

const SkillsSection = () => {
    // Combine all skill categories into a single array
    const allSkills = [...skills.usingNow, ...skills.learning, ...skills.otherSkills];

    return (
        <section className="bg-white dark:bg-gray-700 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header Button */}
                <div className="flex justify-center mb-12">
                    <button className="px-8 py-3 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-colors">
                        SKILLS
                    </button>
                </div>

                {/* Unified Skills Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-black   mb-8 text-center">USING NOW & LEARNING SKILLS:</h3>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
                        {allSkills.map((technology, index) => (
                            <TechDetails {...technology} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection