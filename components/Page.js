import React from 'react';
import Head from 'next/head';
import Title from './Title.js';
export default function Page({title, children}) {
    return (
      <>
        <Head>
          <title>{title} - Next Shop</title>
          <meta name='description' content='Next Shop App' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='px-6 py-4'>
          <Title>{title}</Title>
          {children}
        </main>
      </>
    );
}
