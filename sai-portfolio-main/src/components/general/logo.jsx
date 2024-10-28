import { useNavigate } from "react-router-dom";
import Typography from "./typography"

const Logo = () => {
    const navigate = useNavigate()
    const heroSection = document.getElementById("hero")
    return(
    <Typography variant="h1" className="!text-2xl md:!text-3xl !font-semibold text-white !tracking-[-0.02em] cursor-pointer" onClick={() => {navigate('/');heroSection.scrollIntoView({behavior: 'smooth'})}}>
        {'Sai Mohan'}
    </Typography>
)}
Logo.displayName = 'Logo'
export default Logo