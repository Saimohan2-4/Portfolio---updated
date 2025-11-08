import { useSelector } from "react-redux"
import useWindowSize from "../../hooks/useWindowSize"
import { mergeClasses, scrollIntoView } from "../../lib/utils"
import Typography from "../general/typography"
import { NavbarLinks } from "../../lib/configurables"
import ThemeSwitcher from "../general/theme-switcher"
import CustomLink from "../general/custom-link"
import IconButton from "../general/icon-button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../general/drawer"
import Logo from "../general/logo"
import DownloadCV from "../general/download-cv"
import SocialIcons from "../data-renderers/social-icons"

const Header = () => {
  const windowSize = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (windowSize?.width && windowSize?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [windowSize, isOpen]);
  const theme = useSelector((state) => state.theme.theme)

  return (
    <header id="header" className={mergeClasses(
      'sticky top-0 z-30 w-full bg-gray-900 dark:white border-b border-gray-200 dark:border-gray-700 transition-colors duration-300',
      theme,
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none items-center gap-6">
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  <CustomLink 
                    className="text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-black font-medium transition-colors" 
                    to={link.href}
                    onClick={() => scrollIntoView(link.href)}
                  >
                    {link.label}
                  </CustomLink>
                </li>
              ))
            }
          </ul>
          <DownloadCV className="text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-black font-medium transition-colors" />
          <button 
            onClick={() => scrollIntoView('contact')}
            className="px-6 py-2 bg-white dark:bg-black text-black dark:text-white font-medium rounded hover:opacity-90 transition-opacity"
          >
            CONTACT ME
          </button>
        </div>
        <Drawer className="w-full" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton aria-label={"menu-icon-open"}
              role="button"
              id={"menu-icon-open"}>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className={"bg-white dark:bg-gray-900 !text-black dark:!text-white !w-full"}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton aria-label={"menu-icon-close"}
                  role="button"
                  id={"menu-icon-close"}>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink
                      className="text-gray-700 dark:text-gray-300 font-medium"
                      to={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          scrollIntoView(link.href, true);
                          clearTimeout(timeoutId);
                        }, 200);
                      }}
                    >
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
                <li>
                  <DownloadCV className="text-gray-700 dark:text-gray-300 font-medium" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  scrollIntoView('contact', true);
                }}
                className="w-full px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded"
              >
                CONTACT ME
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header >
  )
}

export default Header