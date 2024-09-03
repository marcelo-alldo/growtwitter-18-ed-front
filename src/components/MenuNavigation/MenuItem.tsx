import { Link, useLocation } from 'react-router-dom';
import MenuItemStyles from './MenuItemStyles';


interface MenuItemProps {
  icon: string;
  iconActive: string;
  label: string;
  route: string;
}

function MenuItem({ icon, iconActive, label, route }: MenuItemProps) {
  const location = useLocation();
  const active = location.pathname === route;
  return (
    <Link to={route}>
      <MenuItemStyles>
        <div className='icon-Menu'>
          <img src={active ? iconActive : icon}></img>
        </div>
        <div className='label-Menu'>{label}</div>
        </MenuItemStyles>
    </Link>
  );
}
export default MenuItem;
