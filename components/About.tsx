import React, { MutableRefObject, useContext } from 'react';
import Icons from './Icons';
import { ColorTheme, ThemeContext } from 'styled-components';

export const About = React.forwardRef(function About(_, ref: MutableRefObject<HTMLDivElement>) {
  const theme: ColorTheme = useContext(ThemeContext) as ColorTheme;

  return (
    <div id="about" className="about" ref={ref}>
      <p className="description">
        Welcome to my corner of the internet! <br />
        <br /> I&apos;m a Software Engineer at Aalyria working on <a href="https://www.aalyria.com/spacetime">Spacetime</a> and am the
        co-founder of <a href="https://vertigotricking.com">Vertigo Tricking</a>. At the moment, I&apos;m also cooking up the{' '}
        <a href="https://trickingapi.dev">TrickingAPI</a> open source project and developing the{' '}
        <a href="https://ust-rankings.deno.dev">US Tricking League Ranking System</a>. Oh, and I also started a{' '}
        <a href="https://mantism.blog">blog</a> this year if you&apos;re curious!
        <br />
        <br />
      </p>
      <div style={{ textAlign: 'center' }}>
        Want to work with me on a tricking project? Feel free to reach me at: <br />
        E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a>
        <br />
        <br />
        <Icons />
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
});
