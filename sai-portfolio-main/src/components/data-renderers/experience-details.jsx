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
    <Card className="mx-auto bg-[#131313] flex w-full max-w-7xl rounded-3xl flex-col justify-start items-start gap-4 p-8 md:flex-row md:gap-8">
      <div className="max-md:order-1 flex flex-col justify-center items-start space-y-3 md:w-1/4">
        <ImageWrapper
          width={120}
          height={120}
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[120px]"
        />
        <Typography variant="subtitle" className="font-extralight opacity-70 text-gray-900">
          {position}
        </Typography>
        <Typography className="text-gray-700 font-extralight opacity-50 md:text-right">
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
        </Typography>
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <ul className="flex flex-col gap-2 list-disc md:gap-2">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">

      </div>
    </Card>
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
