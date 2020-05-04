import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutubeSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Icons = () => {
  return (
    <div className='icons'>
      <a href='https://www.linkedin.com/in/mikaelmantis' className='fontIcon'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
      <a href='https://github.com/mantism' className='fontIcon'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
      <a href='https://www.youtube.com/user/ninjamikael' className='fontIcon'><FontAwesomeIcon icon={faYoutubeSquare} size='2x' /></a>
      <a href='https://instagram.com/mikael_mantis' className='fontIcon'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
      <style jsx>
        {`
          .fontIcon {
            margin: 0.5rem;
          }

          a, a:visited {
            color: #0070f3;
          }
        `}
      </style>
    </div>
  );
}

export default Icons;