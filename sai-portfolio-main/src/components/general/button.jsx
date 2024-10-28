
import * as React from 'react';
import { mergeClasses } from '../../lib/utils';
import propTypes from 'prop-types'

const Button = React.forwardRef(
  ({ className,  ...props }, ref) => {
    const Comp = 'button';
    return (
      <Comp
        className={mergeClasses(
          'inline-flex items-center justify-center rounded-3xl bg-gray-900 px-8 py-2 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
Button.propTypes = {
    className:propTypes.string
}

export default Button;
