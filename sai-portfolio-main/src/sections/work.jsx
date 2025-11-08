import Typography from "../components/general/typography"
import { myProjects } from "../lib/configurables"
import ImageWrapper from "../components/data-renderers/image-wrapper"
import CustomLink from "../components/general/custom-link"

const WorkSection = () => {
    return (
        <section className="relative py-16 lg:py-24 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header Button */}
                <div className="flex justify-center mb-12">
                    <button className="px-8 py-3 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-colors">
                        PORTFOLIO
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                    {myProjects?.map((project, index) => (
                        <CustomLink
                            key={index}
                            to={project.url}
                            externalLink
                            noCustomization
                            className="group"
                        >
                            <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-200">
                                <div className="relative h-64 overflow-hidden">
                                    <ImageWrapper
                                        src={project.previewImage}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-black">{project.name}</h3>
                                    <p className="text-black text-sm line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                        </CustomLink>
                    ))}
                </div>

                <p className="text-center text-black text-sm mt-8">
                    And many more, to come!
                </p>
            </div>
        </section>
    )
}

export default WorkSection