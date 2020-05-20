const SideNav = (props) => {
  const display = props.display ? 'visible' : 'hidden';

  return (
    <div className={`sidenav ${display}`}>
      <ul>
        <li className={props.section == 'about' ? 'active' : ''}>About</li>
        <li className={props.section == 'work' ? 'active' : ''}>Work</li>
        <li className={props.section == 'projects' ? 'active' : ''}>Projects</li>
        <li className={props.section == 'tricking' ? 'active' : ''}>Tricking</li>
      </ul>
      <style jsx>{`
        .sidenav {
          width: 120px;
          position: fixed;
          margin-left: -8em;
          top: 25%;
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
        .active {
          border-left: solid 3px #0070f3;
        }
      `}</style>
    </div>
  )
}

export default SideNav;