import { socialLinks } from '../../lib/configurables';
import PropTypes from 'prop-types'

const SocialIcons = ({uniqueid}) => {
  return (
    <div className="flex gap-3">
      {socialLinks.map((socialLink, index) => (
        <button
          key={index}
          aria-label={socialLink.label}
          role="button"
          id={socialLink.label+uniqueid}
          onClick={() => window.open(socialLink.url, '_blank')}
          className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
        >
          <socialLink.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};
SocialIcons.displayName = 'SocialIcons';
SocialIcons.propTypes = {
  uniqueid: PropTypes.number,
};
export default SocialIcons;
