import AboutSection from '../sections/about-me'
import ContactSection from '../sections/contact'
import ExperienceSection from '../sections/experiences'
import HeroSection from '../sections/hero'
import SkillsSection from '../sections/skills'
import WorkSection from '../sections/work'
// import TestimonialsSection from '../sections/testimonials'

export const sections = [
    {
        title: 'Hero',
        id: 'hero',
        component: HeroSection
    },
    {
        title: 'About Me',
        id: 'about',
        component: AboutSection
    },
    {
        title: 'Skills',
        id: 'skills',
        component: SkillsSection
    },
    {
        title: 'Experience',
        id: 'experience',
        component: ExperienceSection
    },
    {
        title: 'Work',
        id: 'work',
        component: WorkSection
    },
    // {
    //     title: 'Testimonials',
    //     id: 'testimonials',
    //     component: TestimonialsSection
    // },
    {
        title: 'Contact',
        id: 'contact',
        component: ContactSection
    },
]