import Layout from '../components/Layout';
import React from 'react';
import Link from 'next/link';

const Instagram = (props) => {
  return (
    <Layout>
      <h1 className='title'>
        Hi, looks like you tried <br/> to go to my Instagram! 
      </h1>
      <h1 className='emoji'>🤸🏽‍♂️</h1>
      <p className='caption'>
        <Link href='/'>return home</Link>
      </p>
      <div className='content'>
        <p>
          Thank you for being interested :) At the moment I have disabled my Instagram account as an
          experiment to see how productive I am with work and training without having the option to infinitely scroll
          through its content. Feel free to check out my <Link href='https://www.youtube.com/user/ninjamikael'>youtube</Link> to
          see some of my slightly outdated tricking content. 
        </p>
      </div>
      <style jsx>{`
        .title {
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }

        .content {
          padding-top: 2rem;
          margin: 0 auto;
          flex: 1;
          max-width: 650px;
        }
      
      `}</style>
    </Layout>
  )
}

export default Instagram;