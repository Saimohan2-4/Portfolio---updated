import { sections } from "../../routes/sections"
import Container from "./container"

const SpaWrapper = () => {
  return (
    <>
    {sections.map((section,index) => (
        <Container key={section.id} index={index} id={section.id}>{section.component()}</Container>
      ))}
  </>
  )
}

export default SpaWrapper