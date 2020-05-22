import SideNav from '../components/SideNav';
import MobileNav from '../components/MobileNav';

const NavWrapper = (props) => {
  return (
    <div className='navigation'>
      <MobileNav display={props.display} section={props.section} handleClick={props.handleClick}/>
      <SideNav display={props.display} section={props.section} handleClick={props.handleClick}/>
    </div>
  );
};

export default NavWrapper;