import Typography from "../components/general/typography"
import SocialIcons from "../components/data-renderers/social-icons"
import DownloadCV from "../components/general/download-cv"
import { Link } from "react-router-dom"
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-12 md:!flex-row">
      {/* Image */}
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div className="relative h-[300px] w-[280px] md:h-[340px] md:w-[300px]">
          <svg viewBox="0 0 367 367" height="330" width="280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern id="bias" height="100%" width="100%" patternContentUnits="objectBoundingBox" viewBox="0 0 1 1" preserveAspectRatio="xMidYMid slice">
                <image height="1" width="1" preserveAspectRatio="xMidYMid slice" xlinkHref="/Sai-Headshot.JPG" />
              </pattern>
            </defs>
            <path d="M0,183.5 L0,0 L183.5,0 C284.844252,0 367,82.1557484 367,183.5 C367,284.844252 284.844252,367 183.5,367 C82.1557484,367 0,284.844252 0,183.5 Z" fill="url(#bias)"></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex max-w-xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <Typography className={'flex justify-start items-center typewriter md:text-5xl text-3xl !font-medium'} variant="h1">
              Saimohan S
            </Typography>
          </div>
          <Typography className="font-light opacity-40 text-base leading-8 !mt-8">
            Experienced Data Analyst with a proven track record of extracting actionable insights from complex datasets. Over the past three years, I&apos;ve honed my skills in data wrangling, visualization, and statistical analysis to drive informed decision-making. Passionate about transforming raw data into meaningful narratives, I thrive in collaborative environments where I can leverage my expertise to solve challenging problems and deliver measurable results. </Typography>
        </div>
        <div className="flex justify-center items-center space-x-8 gap-2">
          <DownloadCV />
          </div>
        <SocialIcons uniqueid={1} />
      </div>
    </div>
  )
}

export default HeroSection
