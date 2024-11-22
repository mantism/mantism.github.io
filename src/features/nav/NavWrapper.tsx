import { FunctionComponent } from 'react';
import SideNav from './SideNav';
import { INavProps } from 'navigation';

const NavWrapper: FunctionComponent<INavProps> = (props) => {
  return (
    <div className="navigation">
      <SideNav {...props} />
    </div>
  );
};

export default NavWrapper;
