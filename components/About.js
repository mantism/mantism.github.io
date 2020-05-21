import React, {forwardRef} from 'react';
import Icons from '../components/Icons';

const About = forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      <p className='description'>
        Hi, I'm currently a Software Engineer at BlackRock, Inc. where I have been 
        rotating amongst various development teams within the Aladdin Product Group.
        <br/><br/>
        I graduated from the University of Pennsylvania in May 2018 with a Bachelor's 
        in Computer Science from the School of Engineering. 
        <br/><br/>
        In my free time I like brewing coffee, reading sci-fi, and practicing this sport called tricking!
          I also co-run a tricking event brand called <a href='https://vertigotricking.com'>Vertigo Tricking.</a>
      </p>
      <div style={{textAlign: 'center'}}>
        Feel free to reach me at: <br/>
        E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a><br/><br/>
        <Icons/>
      </div>
      <style jsx>{`
        .description {
          line-height: 1.5;
          font-size: 1rem;
          text-align: left;
        }
      `}</style>
    </div>
  );
});

export default About;