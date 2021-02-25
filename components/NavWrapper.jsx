import React from 'react';
import SideNav from './SideNav';
import MobileNav from './MobileNav';

const NavWrapper = (props) => {
  return (
    <div className='navigation'>
      <MobileNav {...props}/>
      <SideNav {...props}/>
    </div>
  );
};

export default NavWrapper;