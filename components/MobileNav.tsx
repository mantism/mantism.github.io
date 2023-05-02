import React, { useState, useContext, CSSProperties } from 'react';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ColorTheme, ThemeContext } from 'styled-components';
import { INavProps } from 'navigation';

const MobileNav = (props: INavProps) => {
  const { handleClick } = props;
  const [open, setOpen] = useState(false);
  const theme: ColorTheme = useContext(ThemeContext) as ColorTheme;

  const toggleMenu = (callback) => {
    setOpen(!open);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const duotoneIconStyleOrange: CSSProperties = {
    //@ts-ignore
    '--fa-primary-color': '#FF8357',
    '--fa-secondary-color': '#e3e4e8',
  };

  const duotoneIconStyleBlue: CSSProperties = {
    //@ts-ignore
    '--fa-primary-color': '#0070f3',
    '--fa-secondary-color': '#e3e4e8',
  };

  const duotoneIconStyleGreen: CSSProperties = {
    //@ts-ignore
    '--fa-primary-color': '#B3DDD1',
    '--fa-secondary-color': '#e3e4e8',
  };

  return (
    <div className="mobilenav">
      <div className={'outer-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
        <FontAwesomeIcon icon={duotone('bars')} size="sm" style={duotoneIconStyleOrange} />
      </div>
      <div className={'menu ' + (open ? 'opened' : 'closed')}>
        <div className={'inner-toggle ' + (open ? 'opened' : 'closed')} onClick={toggleMenu}>
          <FontAwesomeIcon icon={duotone('times')} size="sm" />
        </div>
        <div className="label">Sections</div>
        <div className="sections">
          <IconButton
            text="about"
            action={() => {
              toggleMenu(handleClick('about'));
            }}
          >
            <FontAwesomeIcon icon={duotone('home')} size="2x" style={duotoneIconStyleBlue} />
          </IconButton>
          <IconButton
            text="work"
            action={() => {
              toggleMenu(handleClick('work'));
            }}
          >
            <FontAwesomeIcon icon={duotone('suitcase')} size="2x" style={duotoneIconStyleOrange} />
          </IconButton>
          <IconButton
            text="projects"
            action={() => {
              toggleMenu(handleClick('projects'));
            }}
          >
            <FontAwesomeIcon icon={duotone('coffee')} size="2x" style={duotoneIconStyleGreen} />
          </IconButton>
          <IconButton
            icon="vertigo"
            text="tricking"
            action={() => {
              toggleMenu(handleClick('tricking'));
            }}
          />
        </div>
        <div className="label">Socials</div>
        <div className="socials">
          <IconButton
            action={() => {
              toggleMenu(openInNewTab('https://github.com/mantism'));
            }}
          >
            <FontAwesomeIcon icon={brands('github')} size="2x" style={{ color: '#0070f3' }} />
          </IconButton>
          <IconButton
            action={() => {
              toggleMenu(openInNewTab('https://www.mantism.blog'));
            }}
          >
            <FontAwesomeIcon icon={duotone('typewriter')} size="2x" style={duotoneIconStyleBlue} />
          </IconButton>
          <IconButton
            action={() => {
              toggleMenu(openInNewTab('https://www.linkedin.com/in/mikaelmantis'));
            }}
          >
            <FontAwesomeIcon icon={brands('linkedin')} size="2x" style={{ color: '#0070f3' }} />
          </IconButton>
          <IconButton
            action={() => {
              toggleMenu(openInNewTab('https://www.youtube.com/user/ninjamikael'));
            }}
          >
            <FontAwesomeIcon icon={brands('youtube-square')} size="2x" style={{ color: '#0070f3' }} />
          </IconButton>
          <IconButton
            action={() => {
              toggleMenu(openInNewTab('/instagram'));
            }}
          >
            <FontAwesomeIcon icon={brands('instagram')} size="2x" style={{ color: '#0070f3' }} />
          </IconButton>
        </div>
        <div className="menu-footer">
          <div
            className="contact-me"
            onClick={() => {
              openInNewTab('mailto:mikael.mantis7@gmail.com');
            }}
          >
            Contact Me
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .menu {
            width: 85vw;
            height: auto;
            margin-left: 7.5vw;
            margin-top: 5vh;
            top: 0;
            left: 0;
            position: fixed;
            border-radius: 10px;
            transition: opacity 0.5s;
            background: ${theme.bg.primary};
            box-shadow: 14px 14px 28px ${theme.boxShadow.dark}, -14px -14px 28px ${theme.boxShadow.light};
          }

          .sections {
            padding-top: 1.5rem;
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px dotted ${theme.borderColor};
          }

          .socials {
            padding-top: 1.5rem;
            width: 85%;
            margin: 0 auto;
          }

          .menu.closed {
            opacity: 0;
            display: none;
          }

          .menu.opened {
            opacity: 1;
            display: block;
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
            background-color: ${theme.borderColor};
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
            background: linear-gradient(145deg, ${theme.boxButton.light}, ${theme.boxButton.dark});
          }

          .contact-me:hover {
            background: linear-gradient(145deg, ${theme.boxButton.dark}, ${theme.boxButton.light});
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
};

export default MobileNav;
