import Typography from "../general/typography"
import Card from "../layout/card"
import ImageWrapper from "./image-wrapper"
import PropTypes from 'prop-types'
const SkillCard = ({ image, title, description }) => {
    return (
        <Card className={"bg-[#131313] shadow-lg backdrop-blur-lg h-96 space-y-6 lg:w-96 w-full flex flex-col justify-center py-8 px-4 rounded-3xl items-center"}>
            <div className="flex flex-col w-full justify-center items-center">
                <ImageWrapper className="!w-24 !h-24 -mt-7 " src={image} />
                <Typography variant="subtitle" className="!text-white underline underline-offset-4 font-extralight opacity-70">{title}</Typography>
            </div>
            <Typography className="!text-white px-3 font-extralight opacity-50">
                {description}
            </Typography>

        </Card>
    )
}
SkillCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default SkillCard