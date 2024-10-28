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
      'sticky top-0 z-30 max-w-3xl border-b border-transparent pt-6  mx-auto max-md:border-gray-100 transition-colors duration-300',
      theme,
      // scrolled ? 'bg-gray/25 backdrop-blur-xl md:border-gray-100' : '',
    )}>
      <div className="mx-auto rounded-full flex w-full bg-[#131315]  items-center justify-around p-4 md:px-8">
        <div className="hidden items-center gap-6 md:flex">
          <ul className={"flex list-none items-center gap-6 !text-[#A386E9]"}>
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  <CustomLink className="!text-[#A386E9]" to={link.href}
                    // className={isLinkActive(link.href)?"text-gray-900":""} 
                    onClick={() => scrollIntoView(link.href)}>{link.label}</CustomLink>
                </li>
              ))
            }
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
        </div>
          <div className="flex items-center gap-4">
            <SocialIcons />
          </div>
        <Drawer className="w-full" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton aria-label={"menu-icon-open"}
              role="button"
              id={"menu-icon-open"}>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className={"bg-[#131315] !text-white !w-full"}>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton aria-label={"menu-icon-close"}
                  role="button"
                  id={"menu-icon-close"}>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink
                    className="text-white font-extralight opacity-70"
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
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header >
  )
}

export default Header