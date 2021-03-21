import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';

import '../../../styles/components/navigation/navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </nav>
);

export default Navigation;
