import { useState } from "react";
import IconButton from "../components/general/icon-button"
import Typography from "../components/general/typography"
import useWindowSize from "../hooks/useWindowSize";
import { copyTextToClipboard, mergeClasses } from "../lib/utils";
import { Copy, Mail, Phone } from "lucide-react";
import { email, phone } from "../lib/configurables";
import { useSelector } from "react-redux";
import SocialIcons from "../components/data-renderers/social-icons";

const ContactSection = () => {
  const { width } = useWindowSize();
  const theme = useSelector((state) => state.theme.theme);
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState(
    null
  );

  const handleCopyClick = async (text, type) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Typography variant="subtitle" className="max-w-xl text-center font-extralight opacity-70">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className={mergeClasses("h-6 w-6 md:h-8 md:w-8", theme === 'dark' ? 'stroke-white' : 'stroke-black')} />
            {/* <Link href={`mailto:${email}`}> */}
            <Typography variant="h2">{email}</Typography>
            {/* </Link> */}
            <IconButton aria-label={"copy-email"}
              role="button"
              id={"copy-email"}
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className={mergeClasses("h-6 w-6 md:h-8 md:w-8", theme === 'dark' ? 'stroke-white' : 'stroke-black')} />
            <Typography variant="h2">{phone}</Typography>
            <IconButton
              aria-label={"copy-phone"}
              role="button"
              id={"copy-phone"}
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(phone.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons uniqueid={2}/>
        </div>
      </div>
    </>
  )
}

export default ContactSection