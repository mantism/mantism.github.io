import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = () => {
  return (
    <div className='icons'>
      <a href='https://www.linkedin.com/in/mikaelmantis' className='fontIcon' aria-label='linkedin'><FontAwesomeIcon icon={['fab','linkedin']} size='2x'/></a>
      <a href='https://github.com/mantism' className='fontIcon' aria-label='github'><FontAwesomeIcon icon={['fab','github']} size='2x'/></a>
      <a href='https://www.youtube.com/user/ninjamikael' className='fontIcon' aria-label='youtube'><FontAwesomeIcon icon={['fab','youtube-square']} size='2x' /></a>
      <a href='https://instagram.com/mikael_mantis' className='fontIcon' aria-label='instagram'><FontAwesomeIcon icon={['fab','instagram']} size='2x' /></a>
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