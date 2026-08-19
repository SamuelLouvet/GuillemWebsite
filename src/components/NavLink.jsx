import { forwardRef } from 'react';
import { useVeil } from '../context/VeilContext.jsx';

const NavLink = forwardRef(function NavLink({ to, no, title, className, children }, ref) {
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

export default NavLink;
