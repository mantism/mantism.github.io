import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const IconButton = ({icon, text, color='#0070f3', action}) => {
  return (
    <div className='icon-button' onClick={action}>
      <div className='icon-circle'>
        <div className='svg-icon'>
          {icon == 'vertigo' ? 
            <img src='./V-Logo.svg' alt='vertigo-logo' 
              style={{width: '16px', height:'16px', marginTop: '2.5px'}}></img>
            :
            <FontAwesomeIcon icon={icon} size='1x' style={{color}}/>
          }
        </div>
      </div>
      {text && 
        <div className='text'>
          <h5>{text}</h5>
        </div>
      }
      <style jsx>{`
        .icon-button {
          padding: 0;
          margin-left: 1rem;
          display: inline-block;
          margin-right: 0;
        }
        
        .svg-icon {
          display: block;
          text-align: center;
          padding: 5px;
        }

        .icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
          box-shadow:  5px 5px 100px #fcfcfc, 
             -5px -5px 100px #ffffff;
          margin-right: 1rem;
          display: inline-block;
          vertical-align: middle;
        }

        .icon-circle:hover {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow:  5px 5px 100px #fcfcfc, 
             -5px -5px 100px #ffffff;
        }

        .text {
          display: inline-block;
          vertical-align: middle;
        }

      `}</style>
    </div>
  );
}

export default IconButton;