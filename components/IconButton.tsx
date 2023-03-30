import React, { useContext } from 'react';
import Image from 'next/image';
import { ColorTheme, ThemeContext } from 'styled-components';

interface IIconButtonProps {
  icon?: string;
  text?: string;
  action?: () => void;
  children?: React.ReactNode;
}

const IconButton = (props: IIconButtonProps) => {
  const theme: ColorTheme = useContext(ThemeContext) as ColorTheme;
  const { icon, text, action, children} = props;

  return (
    <div className='icon-button' onClick={action}>
      <div className='icon-circle'>
        <div className='svg-icon'>
          {icon == 'vertigo' && 
            <Image src='./V-Logo.svg' alt='vertigo-logo' width='32' height='32'
              style={{marginTop: '2.5px'}}/>
          }
          {
           children ? children : ''
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
          cursor: pointer;
        }
        
        .svg-icon {
          display: block;
          text-align: center;
          padding: 5px;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(145deg, ${theme.circleButton.light}, ${theme.circleButton.dark});
          box-shadow:  5px 5px 100px ${theme.circleShadow.dark}, 
             -5px -5px 100px ${theme.circleShadow.light};
          margin-right: 1rem;
          display: inline-block;
          vertical-align: middle;
        }

        .icon-circle:hover {
          background: linear-gradient(145deg, ${theme.circleButton.dark}, ${theme.circleButton.light});
          box-shadow:  5px 5px 100px ${theme.circleShadow.dark}, 
             -5px -5px 100px ${theme.circleShadow.light};
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