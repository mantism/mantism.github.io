import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  color: '#FF8357'
}

const Work = (props) => {
  return (
    <div className={`work ${props.display ? 'visible' : 'hidden'}`} ref={props.refProp}>
      <FontAwesomeIcon icon='suitcase' size='3x' style={iconStyle}/>
      <h2>Work</h2>
      <ul className='positions'>
        <li>Software Engineer <a href='https://blackrock.com'>@BlackRock, Inc</a><br/> <i>Jul '18 - Present</i></li>
        <li>Software Engineering Intern <a href='https://willowtreeapps.com'>@WillowTree, Inc</a><br/><i>Jun '17 - August '17</i></li>
        <li>Teaching Assistant <a href='https://upenn.edu'>@University of Pennslyvania</a> <br/> <i>Sept '16 - May '18</i></li>
        <li>Game Development Intern <a href='https://brav.org'>@Brav Conflict Management</a> <br/> <i>May '16 - Jul '16</i></li>
        <li>Front-End Developer <a href='https://thedp.com'>@The Daily Pennsylvanian</a> <br/> <i>Feb '16 - May '17</i></li>
      </ul>
      <style jsx>{`
        .work {
          padding-top: 5rem;
          text-align: center;
          max-width: 300px;
          margin: 0 auto;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 5rem;
        }

        ul {
          text-align: left;
          list-style: none;
          margin-top: 2rem;
          padding: 0;
        }

        li {
          margin: 1rem auto;
        }
      `}
      </style>
    </div>
  );
};

export default Work;