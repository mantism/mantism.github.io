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

        </p>
      </div>
      <style jsx>{`
        .tricking {
          padding-top: 5rem;
          text-align: center;
        }

        .description {
          text-align: left;
        }

        .emphasis {
          color: #da3842;
        }
        
      `}</style>
    </div>
  );
};

export default Tricking;