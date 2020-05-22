import React from 'react';

const Tricking = (props) => {
  const imgStyle = {
    width: '48px',
    height: '48px'
  }
  
  return (
    <div className={`tricking ${props.display? 'visible' : 'hidden'}`} ref={props.refProp}>
      <img src='./V-logo.svg' alt='vertigo-logo' style={imgStyle}></img>
      <h2>Tricking</h2>
      <div className='description'>
        <h3>So what is <span className='emphasis'><i>tricking</i></span>..?</h3>
        <p>
          <i>Tricking is a training discipline that combines kicks with flips and 
            twists from gymnastics as well as many dance moves and styles from breakdancing. 
            It aims to achieve an aesthetic display of different combinations of "tricks".
          </i> - 
          <a href='https://en.wikipedia.org/wiki/Tricking_(martial_arts)'>Wikipedia</a>
        </p>
      </div>
      <img src='/combo.gif' alt='Tricking Combo Performed by Me!'></img>
      <div className='description'>
        Above is one of my favorite "combos" to do but it doesn't nearly capture the beauty of the movement! If interested, 
        I highly recommend doing a quick search of 'tricking' or 'martial arts tricking' on YouTube to see the breadth of 
        maneuvers performed by my fellow tricking athletes. 
      </div>
      <style jsx>{`
        .tricking {
          padding: 5rem 0;
          text-align: center;

        }

        .description {
          text-align: left;
        }

        .emphasis {
          color: #da3842;
        }

        img {
          margin: 1rem auto;
        }
        
      `}</style>
    </div>
  );
};

export default Tricking;