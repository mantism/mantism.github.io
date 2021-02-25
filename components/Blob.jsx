const Blob = (props) => {

  const manhattan = '#fccfb3';
  const sinbad = '#B3DDD1';
  const geyser = '#D1DCE2';

  const coral = '#FF8357';
  const rajah = '#FAC172';
  const monteCarlo = '#89D5C9';
  const wildWillow = '#ADC865';

  return (
    <div className={`svg-blob ${props.expanded ? 'expanded': ''}`}>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path d="M133.8,-183.5C176.3,-153.3,215.6,-118,227.8,-75.2C240,-32.4,225.1,17.9,208.2,66.9C191.3,115.9,172.3,163.5,137.3,187C102.3,210.4,51.1,209.7,7.9,198.8C-35.3,187.9,-70.5,166.7,-117.5,147.2C-164.4,127.6,-222.9,109.5,-247.2,71.7C-271.4,33.8,-261.2,-23.9,-233.9,-66.1C-206.6,-108.3,-162.1,-135.1,-120.2,-165.5C-78.4,-195.9,-39.2,-229.9,3.2,-234.4C45.7,-238.8,91.3,-213.7,133.8,-183.5Z"/>
        </g>
      </svg>
      <style jsx>{`
        .svg-blob {
          position: fixed;
          z-index: -1;
          animation: scale 5s infinite linear;
        }

        .svg-blob svg {
          transition: width 0.5s;
        }

        .svg-blob.expanded svg{
          transform: scale(1.5);
        }

        .svg-blob path {
          fill: ${manhattan};
        }

        .sinbad path {
          fill: ${sinbad};
        }

        .geyser path {
          fill: ${geyser};
        }

        .coral path {
          fill: ${coral};
        }

        .rajah path {
          fill: ${rajah};
        }

        .monteCarlo path {
          fill: ${monteCarlo};
        }

        .wildWillow path {
          fill: ${wildWillow};
        }

        @keyframes scale {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(0.95);
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );

}
  

export default Blob;