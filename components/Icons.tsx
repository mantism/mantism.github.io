import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

const Icons = () => {
  return (
    <div className="icons">
      <a href="https://github.com/mantism" className="fontIcon" aria-label="github">
        <FontAwesomeIcon icon={brands('github')} size="2x" />
      </a>
      <a href="https://www.mantism.blog" className="fontIcon" aria-label="substack">
        <FontAwesomeIcon icon={duotone('typewriter')} size="2x" />
      </a>
      <a href="https://ko-fi.com/mantism" className="fontIcon" aria-label="kofi">
        <FontAwesomeIcon icon={duotone('coffee')} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/mikaelmantis" className="fontIcon" aria-label="linkedin">
        <FontAwesomeIcon icon={brands('linkedin')} size="2x" />
      </a>
      <a href="https://www.youtube.com/user/ninjamikael" className="fontIcon" aria-label="youtube">
        <FontAwesomeIcon icon={brands('youtube-square')} size="2x" />
      </a>
      <a href="https://www.instagram.com/mikael_mantis" className="fontIcon" aria-label="instagram">
        <FontAwesomeIcon icon={brands('instagram')} size="2x" />
      </a>
      <style jsx>
        {`
          .fontIcon {
            margin: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Icons;
