import React, {forwardRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
  color: '#FF8357'
}

const Work = forwardRef((props, ref) => {
  return (
    <div className={`work ${props.display ? 'visible' : 'hidden'}`} ref={ref}>
      <FontAwesomeIcon icon={faSuitcase} size='3x' style={iconStyle}/>
      <h2>Work</h2>
      <ul className='positions'>
        <li>Software Engineer <a>@BlackRock, Inc</a><br/> <i>7/18- Present</i></li>
        <li>Software Engineering Intern <a>@WillowTree, Inc</a><br/><i>6/17 - 8/17</i></li>
        <li>Teaching Assistant <a>@University of Pennslyvania</a> <br/> <i>September 2016 - May 2018</i></li>
        <li>Game Development Intern <a>@Brav Conflict Management</a> <br/> <i>May '16 - Jul '16</i></li>
        <li>Front-End Developer <a>@The Daily Pennsylvanian</a> <br/> <i>Feb 2016 - May 2017</i></li>
      </ul>
      <style jsx>{`
        .work {
          padding-top: 5rem;
          text-align: center;
          max-width: 300px;
          margin: 0 auto;
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
});

export default Work;