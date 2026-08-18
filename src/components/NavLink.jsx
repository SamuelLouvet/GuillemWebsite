import { useVeil } from '../context/VeilContext.jsx';

export default function NavLink({ to, no, title, className, children }) {
  const { navigate } = useVeil();
  return (
    <a
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
}
