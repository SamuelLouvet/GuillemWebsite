import { forwardRef } from 'react';
import { useVeil } from '../context/VeilContext.jsx';

const NavLink = forwardRef((props, ref) => {
  const { to, no, title, className, children } = props;
  const { navigate } = useVeil();
  return (
    <a
      ref={ref}
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate({ target: to, no, title });
      }}
    >
      {children}
    </a>
  );
});
NavLink.displayName = 'NavLink';

export default NavLink;
