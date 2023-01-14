import React, { useContext } from 'react';
import Icons from './Icons';
import { ThemeContext } from 'styled-components';

const About = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className='about' ref={props.refProp}>
      <p className='description'>
        Welcome to my corner of the internet! <br/><br/> I'm a Software Engineer at Amazon working on <a href='https://luna.amazon.com'>Luna</a> and am the co-founder of <a href='https://vertigotricking.com'>Vertigo Tricking</a>.{' '}
        At the moment, I'm cooking up the <a href='https://trickingapi.dev'>TrickingAPI</a> open source project. Oh, and I also started a <a href='https://mantism.blog'>blog</a> this year if you're curious! 
        <br/><br/>
      </p>
      <div style={{textAlign: 'center'}}>
        Want to work with me on a tricking project?
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