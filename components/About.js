import React from 'react';
import Icons from '../components/Icons';

const About = (props) => {
  return (
    <div className='about' ref={props.refProp}>
      <p className='description'>
        Hi, I'm currently a Software Engineer at BlackRock, Inc. where I have been 
        rotating amongst various development teams within the Aladdin Product Group.
        I consider Java and JavaScript my main languages but also work regularly with Python, sometimes Perl, 
        and in the past have dabbled in C/C++.
        <br/><br/>
        I graduated from the University of Pennsylvania in May 2018 with a Bachelor's 
        in Computer Science from the School of Engineering. 
        <br/><br/>
        In my free time I like brewing coffee, reading sci-fi, and practicing a sport called tricking!
          I also co-run a tricking event brand called <a href='https://vertigotricking.com'>Vertigo Tricking.</a>
      </p>
      <div style={{textAlign: 'center'}}>
        Feel free to reach me at: <br/>
        E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a><br/><br/>
        <Icons/>
      </div>
      <style jsx>{`

        .about {
          border-bottom: 1px solid #eaeaea;
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