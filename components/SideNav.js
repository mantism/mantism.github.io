const SideNav = ({display, section, handleClick}) => {
  return (
    <div className={`sidenav ${ display ? 'visible' : 'hidden'}`}>
      <ul>
        <li className={section == 'about' ? 'active' : ''} 
          onClick={() => handleClick('about')}>
            About
        </li>
        <li className={section == 'work' ? 'active' : ''}
          onClick={() => handleClick('work')}>
            Work
        </li>
        <li className={section == 'projects' ? 'active' : ''}
          onClick={() => handleClick('projects')}>
            Projects
        </li>
        <li className={section == 'tricking' ? 'active' : ''}
          onClick={() => handleClick('tricking')}>
            Tricking
        </li>
      </ul>
      <style jsx>{`
        .sidenav {
          width: 120px;
          position: fixed;
          margin-left: -10em;
          top: 25%;
          display: block;
        }

        ul {
          text-align: left;
          list-style: none;
          padding: 0;
        }
        
        li {
          padding-left: 10px;
          font-size: 1.25rem;
        }

        li:hover {
          color: #0070f3;
        }
        
        .active {
          border-left: solid 3px #0070f3;
        }

        @media screen and (max-width: 48em) {
          .sidenav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SideNav;