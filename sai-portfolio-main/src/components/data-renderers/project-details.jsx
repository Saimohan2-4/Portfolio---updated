import { ExternalLink } from 'lucide-react';
import Card from '../layout/card';
import { mergeClasses } from '../../lib/utils';
import CustomLink from '../general/custom-link';
import Typography from '../general/typography';
import propTypes from 'prop-types'
import ImageWrapper from './image-wrapper';
const ProjectDetails = ({
    name,
    description,
    // technologies,
    url,
    previewImage,
    layoutType = 'default',
}) => {
    return (
        <Card className="mx-auto bg-[#131313] py-4 px-2 flex w-full max-w-6xl flex-col md:flex-row">
            {/* Image */}
            <div
                className={mergeClasses(
                    'flex items-center justify-center border-gray-100 bg-[#A386E9]/10 rounded-3xl md:w-1/2 lg:p-12',
                    layoutType === 'default'
                        ? 'md:rounded-l-xl md:border-r'
                        : 'md:order-last md:rounded-r-xl md:border-l'
                )}
            >
                <CustomLink noCustomization to={url} externalLink>
                    <ImageWrapper
                        src={previewImage}
                        alt={`${name} preview`}
                        className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                        style={{ objectFit: 'cover' }}
                    />
                </CustomLink>
            </div>

            {/* Content */}
            <div
                className={mergeClasses(
                    'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
                    layoutType === 'default' ? '' : 'md:order-first'
                )}
            >
                <Typography variant="subtitle" className="font-semibold text-gray-900">
                    {name}
                </Typography>
                <Typography>{description}</Typography>
                <div className="flex flex-wrap gap-2">
            
                </div>
                <CustomLink
                    to={url}
                    noCustomization
                    className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                    externalLink
                >
                    <ExternalLink />
                </CustomLink>
            </div>
        </Card>
    );
};
ProjectDetails.propTypes = {
    name: propTypes.string,
    description: propTypes.string,
    technologies: propTypes.array,
    url: propTypes.string,
    previewImage: propTypes.string,
    layoutType: propTypes.string,
}

export default ProjectDetails;
