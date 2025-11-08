import { scrollIntoView } from "../lib/utils"
import SocialIcons from "../components/data-renderers/social-icons"

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Back to Top */}
          <button
            onClick={() => scrollIntoView('hero', true)}
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            BACK TO TOP
          </button>

          {/* Social Icons */}
          <div className="flex justify-center">
            <SocialIcons uniqueid={3} />
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center">
            ©{new Date().getFullYear()} Saimohan S | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

