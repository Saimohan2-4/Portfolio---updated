import Typography from '../general/typography';
import ImageWrapper from './image-wrapper';
import Card from '../layout/card';
import PropTypes from 'prop-types'

const dateFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}) => {
  return (
    <div className="bg-black border-2 border-gray-800 rounded-lg p-8 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <div className={logoAlt?.toLowerCase().includes('kissflow') ? "bg-white p-4 rounded-xl shadow-md mb-4" : "mb-4"}>
            <ImageWrapper
              width={120}
              height={120}
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={logoAlt}
              className={logoAlt?.toLowerCase().includes('kissflow') ? "max-w-[120px] object-contain" : "max-w-[120px]"}
            />
          </div>
          <h3 className="font-bold text-white text-lg mb-2 text-center md:text-left">
            {position}
          </h3>
          <p className="text-gray-400 font-medium text-sm">
            {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
              startDate
            )}{' '}
            -{' '}
            {currentlyWorkHere
              ? 'Present'
              : endDate
                ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                  endDate
                )
                : 'NA'}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:w-3/4">
          <ul className="flex flex-col gap-3 list-disc list-inside">
            {summary?.map((sentence, index) => (
              <li 
                key={index} 
                className="text-gray-400 font-medium text-base leading-relaxed"
              >
                {sentence}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ExperienceDetails.propTypes = {
  logo: PropTypes.string,
  darkModeLogo: PropTypes.string,
  logoAlt: PropTypes.string,
  position: PropTypes.string,
  currentlyWorkHere: PropTypes.bool,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
  summary: PropTypes.arrayOf(PropTypes.string),
}

export default ExperienceDetails;