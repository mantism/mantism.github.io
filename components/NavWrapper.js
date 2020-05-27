import SideNav from '../components/SideNav';
import MobileNav from '../components/MobileNav';

const NavWrapper = (props) => {
  return (
    <div className='navigation'>
      <MobileNav {...props}/>
      <SideNav {...props}/>
    </div>
  );
};

export default NavWrapper;