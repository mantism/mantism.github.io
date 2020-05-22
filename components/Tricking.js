import React from 'react';

const Tricking = (props) => {
  const imgStyle = {
    width: '48px',
    height: '48px'
  }
  
  return (
    <div className={`tricking ${props.display? 'visible' : 'hidden'}`} ref={props.refProp}>
      <img src='./V-Logo.svg' alt='vertigo-logo' style={imgStyle}></img>
      <h2>Tricking</h2>
      <video autoPlay loop muted playsinline id='combo'>
        <source src="./combo.webm" type="video/webm"/>
        <source src="./combo.mp4" type="video/mp4"/>
      </video>
      <div className='caption'>
        Above is one of my favorite "combos" to do but it doesn't nearly capture the beauty of the movement! If interested, 
        I recommend doing a search of 'tricking' or 'martial arts tricking' on YouTube or Instagram to see the breadth of 
        maneuvers performed by the community.
      </div>
      <div className='description'>
        <h3>So what is <span className='emphasis'><i>tricking</i></span>..?</h3>
        <p>
          Tricking is often described as <i>"a combination of martial arts kicks, gymnastics flips and twists, and a little bit of breakdancing"</i>. 
          But to me and many other trickers around the world, its a lifestyle. What started in the 90s as a spinoff of competitive 
          martial arts has turned into this international movement that defies language barriers and breeds a sense of 
          community no matter where you're training in the world.
        </p>
        <p>
          Having practiced for roughly 12 years I've gotten the opportunity to compete around the world, 
          teach at events, contribute to various online platforms, and honestly more importantly - make lifelong friends.
        </p>
        <p>
          You can find my tricking progress on <a href='https://www.youtube.com/user/ninjamikael'>Youtube</a> and 
          <a href='https://instagram.com/mikael_mantis'> Instagram</a>, some tricking tutorials on 
          <a href='https://www.kojostricklab.com/'>Kojos Trick Lab</a>, and 
          a few of my past battles at <a href='https://adrenalineworldwide.com'>Adrenaline</a>.
        </p>
        <p>
          By 2018, I had been a guest at several events around the US and was inspired to start running my own events
          alongside <a href='https://mikehom.com/'>Mike Hom</a>. Together we formed <a href='https://vertigotricking.com'>Vertigo Tricking</a>, 
          an annual multi-day Tricking Gathering in Philadelphia that has been attended and spectated by up to 100 people around the world. 
        </p>
      </div>
      <img src='v2_group_photo.jpeg' alt='Attendees photo from Vertigo 2 in 2019' id='groupPhoto'></img>
      <div className='description'>
        <p>
          Through running the event we aim to help grow our beloved sport and one day get people to say "Oh I've heard of tricking!" instead of "whats that?"
          You can check out content for Vertigo on our <a href='https://instagram.com/vertigotricking'>Instagram</a> and <a href='https://www.youtube.com/channel/UCQAD6Fa1NiyDNl3R3RNpdnA'> YouTube</a>!
        </p>
      </div>


      <style jsx>{`
        .tricking {
          padding: 3rem 0;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          text-align: left;
          font-size: 1rem;
        }

        .emphasis {
          color: #da3842;
        }

        img {
          margin: 1rem auto;
        }

        .caption {
          font-size: 0.8rem;
          font-weight: 100;
        }

        #combo, #groupPhoto {
          box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        }

        #groupPhoto {
          max-width: 400px;
          margin: 0 auto;
        }

        #combo {
          margin: 1rem 0;
        }
        
      `}</style>
    </div>
  );
};

export default Tricking;