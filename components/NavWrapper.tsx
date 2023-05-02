import { FunctionComponent } from 'react';
import SideNav from './SideNav';
import MobileNav from './MobileNav';
import { INavProps } from 'navigation';

const NavWrapper: FunctionComponent<INavProps> = (props) => {
  return (
    <div className="navigation">
      <MobileNav {...props} />
      <SideNav {...props} />
    </div>
  );
};

export default NavWrapper;
