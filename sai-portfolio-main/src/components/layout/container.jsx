import PropTypes from 'prop-types'
import { mergeClasses } from '../../lib/utils'
import { useSelector } from 'react-redux'
const Container = ({ id, children, className = "" }) => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <section id={id} className={mergeClasses("min-w-full transition-all duration-300", className, theme)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  )
}
Container.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node
}
export default Container