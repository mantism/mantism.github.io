import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuButton = ({icon, section, color, action}) => {
  return (
    <div className='menu-button' onClick={action}>
      <div className='menu-icon'>
        {icon == 'vertigo' ? 
          <img src='./V-Logo.svg' alt='vertigo-logo' 
            style={{width: '64px', height:'64px'}}></img>
          :
          <FontAwesomeIcon icon={icon} size='3x' style={{color}}/>
        }
        
      </div>
      <div className='menu-text'>
        <h5>{section}</h5>
      </div>
      <style jsx>{`
        .menu-button {
          margin: 1rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          width: 10rem;
          height: 10rem;
        }

      `}</style>
    </div>
  );
}

const MobileNav = ({display, section, handleClick}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (callback) => {
    setOpen(!open);
  }

  return (
    <div className='mobilenav'>
      <div className={'outer-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
        <FontAwesomeIcon icon='bars' size='1x'/>
      </div>
      <div className={'menu ' + (open ? 'opened' : 'closed')}>
        <div className={'outer-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
          <FontAwesomeIcon icon='times' size='1x'/>
        </div>
        <div className='grid'>
          <MenuButton icon='home' section='about' color='#0070f3' action={() => {
            toggleMenu(handleClick('about'));
          }}/>
          <MenuButton icon='suitcase' section='work' color='#FF8357' action={() => {
            toggleMenu(handleClick('work'));
          }}/>
          <MenuButton icon='coffee' section='projects' color='#B3DDD1' action={() => {
            toggleMenu(handleClick('projects'));
          }}/>
          <MenuButton icon='vertigo' section='tricking' color='#B3DDD1' action={() => {
            toggleMenu(handleClick('tricking'));
          }}/>
        </div>
      </div>
      <style jsx>{`

        .menu {
          position: fixed;
          margin: 0 auto;
          top: 0;
          background: white;
          width: 95vw;
          height: 95vw;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          padding: 1rem;
        }

        .menu.closed {
          opacity: 0;
        }

        .menu.opened {
          opacity: 1;
        }

        .outer-toggle {
          position: fixed;
          display: block !important;
          top: 0.25em;
          right: 1em;
          font-size: 2em;
        }
      
        .outer-toggle.closed {
          display: none;
        }

        .inner-toggle {
          position: absolute;
          display: block !important;
          float: right;
          font-size: 2em;
          top: 0.25em;
          left: 1em;
        }
      `}
      </style>
    </div>
  );
}

export default MobileNav;