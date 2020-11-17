import React, { useContext } from 'react';
import Icons from '../components/Icons';
import { ThemeContext } from 'styled-components';

const About = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className='about' ref={props.refProp}>
      <p className='description'>
        I am currently a Software Engineer at BlackRock working full-stack on our regulatory technology team.
        I consider Java and JavaScript my main languages but also work regularly with Python and sometimes Perl. 
        <br/><br/>
        In my free time I like brewing coffee, reading sci-fi, and trying to push the physical boundaries of my beloved sport called tricking!
          I also co-run a tricking brand called <a href='https://vertigotricking.com'>Vertigo Tricking.</a>
      </p>
      <div style={{textAlign: 'center'}}>
        Feel free to reach me at: <br/>
        E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a><br/><br/>
        <Icons/>
      </div>
      <style jsx>{`
        .about {
          border-bottom: 1px solid ${theme.borderColor};
          padding-bottom: 5rem;
        }
        .description {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default About;