import React, { MutableRefObject, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ColorTheme, ThemeContext } from 'styled-components';
import Link from 'next/link';

const iconStyle = {
  color: '#B3DDD1',
};

interface IProjectsProps {
  display: boolean;
}

export const Projects = React.forwardRef(function Projects(
  props: IProjectsProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const theme: ColorTheme = useContext(ThemeContext) as ColorTheme;

  return (
    <div id="projects" className={`projects ${props.display ? 'visible' : 'hidden'}`} ref={ref}>
      <FontAwesomeIcon icon={duotone('coffee')} size="3x" style={iconStyle} />
      <h2>Projects</h2>
      Heres a brief overview of some of my past and ongoing <Link href="#tricking">tricking</Link> projects! Be sure to
      check back here in the future (or follow me on <Link href="https://github.com/mantism">GitHub</Link>) they may or
      may not get replaced.
      <div className="grid">
        <Link href="https://vertigotricking.com">
          <div className="card">
            <h3>Vertigo Tricking</h3>
            <p>Website for Vertigo Tricking, LLC. Built and maintained by yours truly</p>
            <p className="code">
              <FontAwesomeIcon icon={duotone('code')} size="xs" /> with typescript, react/next.js, redux, stripe, and
              more
            </p>
          </div>
        </Link>
        <div className="card">
          <Link href="https://trickingapi.dev">
            <h3>The Tricking API Project</h3>
            <p>
              Creator and primary contributor to the open source project centered around a lightweight consumption-only
              REST API for the Tricking vocabulary. Includes three main projects - as of 1/19/23
            </p>
            <p className="code">
              <FontAwesomeIcon icon={duotone('code')} size="xs" /> with go, typescript, react/next.js
            </p>
            <hr />
          </Link>
          <br />
          <div className="code github-links">
            <Link href="https://github.com/TrickingApi/trickingapi">
              <FontAwesomeIcon icon={brands('github')} size="xl" /> api{' '}
            </Link>
            <Link href="https://github.com/TrickingApi/trickingapi.dev">
              <FontAwesomeIcon icon={brands('github')} size="xl" /> docs{' '}
            </Link>
            <Link href="https://github.com/TrickingApi/tricking-ts">
              <FontAwesomeIcon icon={brands('github')} size="xl" /> ts-lib{' '}
            </Link>
            <Link href="https://www.npmjs.com/package/tricking-ts">
              <FontAwesomeIcon icon={brands('npm')} size="xl" />
            </Link>
          </div>
        </div>
        <div className="card">
          <Link href="https://ust-rankings.deno.dev/en/introduction">
            <h3>US Tricking League</h3>
            <p>SSG app built with Astro for the US Tricking League to display rankings and other information.</p>
            <p className="code">
              <FontAwesomeIcon icon={duotone('code')} size="xs" /> with astro, deno
            </p>
            <hr />
          </Link>
          <br />
          <Link href="https://github.com/USTricking/USTricking.com">
            <FontAwesomeIcon icon={brands('github')} size="xl" />
          </Link>
        </div>
        <div className="card">
          <Link href="https://trickstats.com">
            <h3>Trick Stats - Outdated</h3>
            <p>
              {' '}
              Single page application that compiles data and displays interactive graphics related to the sport of
              martial arts tricking. Data collected via survey in 2016 with 300+ responses. Rewritten in December 2017.
            </p>
            <p className="code">
              <FontAwesomeIcon icon={duotone('code')} size="xs" /> with React, scss, D3.js
            </p>
            <hr />
          </Link>
          <br />
          <Link href="https://github.com/mantism/TrickingSurvey">
            <FontAwesomeIcon icon={brands('github')} size="xl" />
          </Link>
        </div>

        <p className="footnote">
          Also this website was a fun project built with next.js, you can{' '}
          <a href="https://github.com/mantism/personal-website">view the source here</a>{' '}
        </p>
      </div>
      <style jsx>{`
        .projects {
          padding-top: 3rem;
          text-align: center;
          border-bottom: 1px solid ${theme.borderColor};
          padding-bottom: 3rem;
          margin: 1rem 0;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 95%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid ${theme.borderColor};
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: ${theme.text.links};
          border-color: ${theme.text.links};
        }

        .card h3 {
          margin: 0 0 1rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        .code {
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
            Courier New, monospace;
        }

        .footnote {
          font-size: 0.75rem;
          font-weight: 200;
        }
      `}</style>
    </div>
  );
});
