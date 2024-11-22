'use client';
import React, { MutableRefObject, useContext } from 'react';
import Image from 'next/image';
import { DarkModeContext } from '../../theme/DarkModeContext';
interface ITrickingProps {
  display: boolean;
}

export const Tricking = React.forwardRef(function Tricking(
  props: ITrickingProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div id="tricking" className={`tricking ${props.display ? 'visible' : 'hidden'}`} ref={ref}>
      <Image
        src={darkMode ? '/ustricking_logo_dark.png' : '/ustricking_logo_light.png'}
        alt="US Tricking Logo"
        width="60"
        height="48"
      />
      <h2>Tricking</h2>
      <video autoPlay loop muted playsInline id="combo">
        <source src="./combo.mp4" type="video/mp4" />
        <source src="./combo.webm" type="video/webm" />
      </video>
      <div className="description">
        <h3>
          So what is{' '}
          <span className="emphasis">
            <i>tricking</i>
          </span>
          ..?
        </h3>
        <p>
          Tricking is often described as{' '}
          <i>
            &quot;a combination of martial arts kicks, gymnastics flips and twists, and a little bit of
            breakdancing&quot;
          </i>
          . But to me and many other trickers around the world, its a lifestyle. What started in the 90s as a spinoff of
          competitive martial arts has turned into this international movement that defies language barriers and breeds
          a sense of community no matter where you&apos;re training in the world.
        </p>
        <p>
          Having practiced for more than half my life (since 12 years old), I&apos;ve gotten the opportunity to compete
          around the world, teach at events, contribute to various online platforms, host my own events, be a part of
          the larger organizing body for tricking, and honestly more importantly - make lifelong friends.
        </p>
        <p>
          You can find my tricking progress on <a href="https://www.youtube.com/user/ninjamikael">Youtube</a> and
          <a href="https://www.instagram.com/mikael_mantis"> Instagram</a>, some tricking tutorials on
          <a href="https://www.kojostricklab.com/">Kojos Trick Lab</a>, and a few of my past battles at{' '}
          <a href="https://adrenalineworldwide.com">Adrenaline</a>.
        </p>
        <p>
          By 2018, I had been a guest at several events around the US and was inspired to start running my own events
          alongside <a href="https://mikehom.com/">Mike Hom</a>. Together we formed{' '}
          <a href="https://vertigotricking.com">Vertigo Tricking</a>; a Tricking company that aims to provide a
          best-in-class gathering experience for all trickers by bringing together the community, sharing knowledge, and
          showcasing tremendous athletes through the Vertigames and battles.
        </p>
      </div>
      <div className="image-wrapper" id="groupPhoto">
        <Image src="/v4_group_photo.jpg" alt="Attendees photo from Vertigo 4 in 2022" fill />
      </div>
      <div className="description">
        <p>
          Through running the event we aim to help grow our beloved sport and one day get people to say &quot;Oh
          I&apos;ve heard of tricking!&quot; instead of &quot;whats that?&quot; You can check out content for Vertigo on
          our <a href="https://vertigotricking.com">website</a>,{' '}
          <a href="https://instagram.com/vertigotricking">Instagram</a> and{' '}
          <a href="https://www.youtube.com/channel/UCQAD6Fa1NiyDNl3R3RNpdnA"> YouTube</a>!
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

        #combo,
        #groupPhoto {
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        }

        #groupPhoto {
          width: 600px;
          height: 400px;
          margin: 0 auto;
          position: relative;
        }

        #combo {
          margin: 1rem 0;
        }

        //mobile sizing for images
        @media (max-width: 450px) {
          #groupPhoto {
            width: 300px;
            height: 200px;
          }

          #combo {
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
});
