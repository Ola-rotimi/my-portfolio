import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <h1>Ola</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
};

