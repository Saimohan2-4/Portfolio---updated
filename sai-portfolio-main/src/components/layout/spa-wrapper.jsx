import { sections } from "../../routes/sections"

const SpaWrapper = () => {
  return (
    <>
    {sections.map((section,index) => (
        <div key={section.id} id={section.id}>
          {section.component()}
        </div>
      ))}
  </>
  )
}

export default SpaWrapper