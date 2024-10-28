import PropTypes from 'prop-types'
import Typography from './typography'
import { Frown } from 'lucide-react'
import { useSelector } from 'react-redux'
const NoData = ({ message = "No Data Found" }) => {
    const theme = useSelector((state) => state.theme.theme)
    return (
        <div className="min-h-[30vh] border w-[70%] md:w-[40%] flex flex-col gap-6 justify-center items-center">
            <Frown size={70} className={`animate-waving-hand ${theme === 'dark' ? 'stroke-amber-200' : 'stroke-black'}`} />
            <Typography variant="h3" className="text-lg md:!text-xl">{message}</Typography>
        </div>
    )
}
NoData.propTypes = {
    message: PropTypes.string
}
export default NoData