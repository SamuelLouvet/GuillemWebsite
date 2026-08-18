import { useVeil } from '../context/VeilContext.jsx';
import '../styles/veil.css';

export default function Veil() {
  const { active, no, title } = useVeil();
  return (
    <div className={`veil${active ? ' active' : ''}`}>
      <div className="veil-inner">
        <span className="veil-no">{no}</span>
        <span className="veil-title">{title}</span>
      </div>
    </div>
  );
}
