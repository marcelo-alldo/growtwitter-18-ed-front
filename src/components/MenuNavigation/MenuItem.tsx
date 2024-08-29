import { Link } from 'react-router-dom';
import MenuItemStyles from './MenuItemStyles';

interface MenuItemProps {
  icon: string;
  label: string;
  route: string;
}

function MenuItem({ icon, label, route }: MenuItemProps) {
  return (
    <Link to={route}>
      <MenuItemStyles>
        <div className='icon-Menu'>
          <img src={icon}></img>
        </div>
        <div className='label-Menu'>{label}</div>
        </MenuItemStyles>
    </Link>
  );
}
export default MenuItem;
