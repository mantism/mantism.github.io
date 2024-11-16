import React, { MutableRefObject, useContext } from 'react';
import Icons from '../../ui/Icons';
import { ColorTheme, ThemeContext } from 'styled-components';

export const About = React.forwardRef(function About(_, ref: MutableRefObject<HTMLDivElement>) {
  const theme: ColorTheme = useContext(ThemeContext) as ColorTheme;

  return (
    <div id="about" className="about" ref={ref}>
      <p className="description">
        Welcome to my corner of the internet! <br />
        <br /> I&apos;m a software engineer at Aalyria working on{' '}
        <a href="https://www.aalyria.com/spacetime">Spacetime</a>, a temporospatial SDN platform for the future of
        connectivity.
        <br />
        <br />
        Some projects of mine outside of work include developing{' '}
        <a href="https://ustricking">US Tricking&apos;s website</a>, maintaining the{' '}
        <a href="https://trickingapi.dev">TrickingAPI</a> and the rare <a href="https://mantism.blog">blog post</a>.
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
