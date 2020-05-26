import React, {useState} from 'react';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNav = ({display, section, handleClick}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (callback) => {
    setOpen(!open);
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className='mobilenav'>
        <div className={'outer-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
            <FontAwesomeIcon icon='bars' size='1x'/>
        </div>
        <div className={'menu ' + (open ? 'opened' : 'closed')}>
          <div className={'inner-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
            <FontAwesomeIcon icon='times' size='1x'/>
          </div>
          <div className='label'>
            Sections
          </div>
          <div className='sections'>
            <IconButton icon='home' text='about' action={() => {
              toggleMenu(handleClick('about'));
            }}/>
            <IconButton icon='suitcase' text='work' color='#FF8357' action={() => {
              toggleMenu(handleClick('work'));
            }}/>
            <IconButton icon='coffee' text='projects' color='#B3DDD1' action={() => {
              toggleMenu(handleClick('projects'));
            }}/>
            <IconButton icon='vertigo' text='tricking' color='#B3DDD1' action={() => {
              toggleMenu(handleClick('tricking'));
            }}/>
          </div>
          <div className='label'>
            Socials
          </div>
          <div className='socials'>
            <IconButton icon={['fab','linkedin']} action={() => {
              toggleMenu(openInNewTab('https://www.linkedin.com/in/mikaelmantis'));
            }}/>
            <IconButton icon={['fab','github']} action={()=>{
              toggleMenu(openInNewTab('https://github.com/mantism'));
            }}/>
            <IconButton icon={['fab','youtube-square']} action={() => {
              toggleMenu(openInNewTab('https://www.youtube.com/user/ninjamikael'));
            }}/>
            <IconButton icon={['fab','instagram']} action={() => {
              toggleMenu(openInNewTab('https://instagram.com/mikael_mantis'));
            }}/>
          </div>
          <div className='menu-footer'>
            <div className='contact-me' onClick={() => {openInNewTab('mailto:mikael.mantis7@gmail.com')}}>
              Contact Me
            </div>
          </div>
        </div>

        <style jsx>{`
          .menu {
            width: 85vw;
            height: auto;
            margin-left: 7.5vw;
            margin-top: 5vh;
            top: 0;
            left: 0;
            position: fixed;
            border-radius: 10px;
            transition: opacity 0.3s;
            background: #ffffff;
            box-shadow:  14px 14px 28px #b8b8b8, 
             -14px -14px 28px #ffffff;
          }

          .sections {
            padding-top: 1.5rem;
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px dotted #eaeaea;
          }

          .socials {
            padding-top: 1.5rem;
            width: 85%;
            margin: 0 auto;
          }

          .menu.closed {
            opacity: 0;
          }

          .menu.opened {
            opacity: 1;
          }

          .outer-toggle {
            position: fixed;
            display: block;
            top: 0.25em;
            right: 1em;
            font-size: 2em;
          }
        
          .outer-toggle.opened {
            display: none;
          }

          .inner-toggle {
            position: absolute;
            display: block;
            float: right;
            font-size: 2em;
            top: 0.5em;
            right: 1.1em;
            font-weight: 200;
          }

          .inner-toggle.closed {
            display: none;
          }
          
          .label {
            display: block;
            margin-top: 2rem;
            margin-left: 1.5rem;
            font-weight: 200;
          }

          .menu-footer {
            width: 95%;
            height: 75px;
            margin: 20px auto 5px;
            background-color: #eaeaea;
            border-radius: 10px;
            padding: 20px;
          }

          .contact-me {
            color: white;
            width: 150px;
            height: 40px;
            text-align: center;
            padding: 8px;
            margin: 0 auto;
            border-radius: 5px;
            background: linear-gradient(145deg, #0078ff, #0065db);
          }

          .contact-me:hover {
            background: linear-gradient(145deg, #0065db, #0078ff);
          }

          @media screen and (min-width: 48em) {
            .mobilenav {
              display: none !important;
            }
          }
        `}
        </style>
    </div>
  );
}

export default MobileNav;