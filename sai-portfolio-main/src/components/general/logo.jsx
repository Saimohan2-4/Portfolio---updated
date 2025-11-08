import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()
    const heroSection = document.getElementById("hero")
    return(
    <div 
        className="cursor-pointer group"
        onClick={() => {
            navigate('/');
            if (heroSection) heroSection.scrollIntoView({behavior: 'smooth'})
        }}
    >
        <svg 
            width="44" 
            height="44" 
            viewBox="0 0 44 44" 
            className="group-hover:scale-110 transition-transform duration-300"
        >
            {/* Connection lines */}
            <line x1="8" y1="32" x2="16" y2="24" stroke="currentColor" strokeWidth="2" className="text-white dark:text-black" />
            <line x1="16" y1="24" x2="22" y2="14" stroke="currentColor" strokeWidth="2" className="text-white dark:text-black" />
            <line x1="22" y1="14" x2="28" y2="20" stroke="currentColor" strokeWidth="2" className="text-white dark:text-black" />
            <line x1="28" y1="20" x2="36" y2="10" stroke="currentColor" strokeWidth="2" className="text-white dark:text-black" />
            
            {/* Data points */}
            <circle cx="8" cy="32" r="3" fill="currentColor" className="text-white dark:text-black" />
            <circle cx="16" cy="24" r="3" fill="currentColor" className="text-white dark:text-black" />
            <circle cx="22" cy="14" r="3" fill="currentColor" className="text-white dark:text-black" />
            <circle cx="28" cy="20" r="3" fill="currentColor" className="text-white dark:text-black" />
            <circle cx="36" cy="10" r="3" fill="currentColor" className="text-white dark:text-black" />
        </svg>
    </div>
)}
Logo.displayName = 'Logo'
export default Logo