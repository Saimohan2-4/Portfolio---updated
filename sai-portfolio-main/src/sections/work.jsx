import ProjectDetails from "../components/data-renderers/project-details"
import Typography from "../components/general/typography"
import { myProjects } from "../lib/configurables"

const WorkSection = () => {
    return (
        <div>
            <div className="flex flex-col space-y-6 items-center gap-4">
                <Typography variant="subtitle" className="max-w-xl text-center font-extralight opacity-70">
                    {`Some of the projects I have worked on.`}
                </Typography>
                {myProjects?.map((project, index) => (
                    <ProjectDetails
                        key={index}
                        {...project}
                        layoutType={index % 2 === 0 ? 'default' : 'reverse'}
                    />
                ))}
            </div>

        </div>
    )
}

export default WorkSection