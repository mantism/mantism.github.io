import React, {forwardRef} from 'react';

const Tricking = forwardRef((props, ref) => {
  const imgStyle = {
    width: '48px',
    height: '48px'
  }
  return (
    <div className={`tricking ${props.display? 'visible' : 'hidden'}`} ref={ref}>
      <img src='./V-logo.svg' style={imgStyle}></img>
      <h2>Tricking</h2>
      <style jsx>{`
        .tricking {
          padding-top: 5rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
});

export default Tricking;