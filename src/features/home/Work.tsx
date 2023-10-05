import React, { MutableRefObject, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorTheme, DefaultTheme, ThemeContext } from 'styled-components';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

const iconStyle = {
  color: '#FF8357',
};

interface IWorkProps {
  display: boolean;
}

export const Work = React.forwardRef(function Work(props: IWorkProps, ref: MutableRefObject<HTMLDivElement>) {
  const theme: DefaultTheme | ColorTheme = useContext(ThemeContext);
  const coloredTheme: ColorTheme = theme as ColorTheme;

  return (
    <div id="work" className={`work ${props.display ? 'visible' : 'hidden'}`} ref={ref}>
      <FontAwesomeIcon icon={duotone('suitcase')} size="3x" style={iconStyle} />
      <h2>Work</h2>
      <ul className="positions">
        <li>
          Software Engineer <a href="https://aalyria.com">@Aalyria</a>
          <br />
          May &apos;23 - Present
        </li>
        <li>
          Software Engineer <a href="https://luna.amazon.com">@Amazon Luna</a>
          <br />
          May &apos;22 to Mar &apos;23
        </li>
        <li>
          Software Engineer <a href="https://aws.amazon.com">@Amazon (AWS)</a>
          <br />
          <i>Jun &apos;21 - May &apos;22</i>
        </li>
        <li>
          Software Engineer <a href="https://blackrock.com">@BlackRock, Inc</a>
          <br /> <i>Jul &apos;18 - May &apos;21</i>
        </li>
        <li>
          Software Engineering Intern <a href="https://willowtreeapps.com">@WillowTree, Inc</a>
          <br />
          <i>Jun &apos;17 - Aug &apos;17</i>
        </li>
        <li>
          Teaching Assistant <a href="https://upenn.edu">@University of Pennslyvania</a> <br />{' '}
          <i>Sept &apos;16 - May &apos;18</i>
        </li>
        <li>
          Game Development Intern <a href="https://brav.org">@Brav Conflict Management</a> <br />{' '}
          <i>May &apos;16 - Jul &apos;16</i>
        </li>
        <li>
          Front-End Developer <a href="https://thedp.com">@The Daily Pennsylvanian</a> <br />{' '}
          <i>Feb &apos;16 - May &apos;17</i>
        </li>
      </ul>
      <style jsx>
        {`
          .work {
            padding-top: 3rem;
            text-align: center;
            max-width: 300px;
            margin: 0 auto;
            border-bottom: 1px solid ${coloredTheme.borderColor};
            padding-bottom: 3rem;
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

          @media (min-width: 85.375em) {
            .work {
              max-width: 500px;
            }
          }
        `}
      </style>
    </div>
  );
});
