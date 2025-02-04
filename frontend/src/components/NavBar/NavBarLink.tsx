import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface NavBarLinkProps {
  label: string;
  path: string;
  icon?: IconType;
}

export function NavBarLink({ label, path, icon: Icon }: NavBarLinkProps) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {Icon && <Icon className="mr-1" size={25} />}
        {label}
      </NavLink>
    </li>
  );
}
