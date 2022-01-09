import React from 'react';
import Head from 'next/head';
import Title from './Title.js';
import NavBar from './NavBar.js';
export default function Page({title, children}) {
    return (
      <>
        <Head>
          <title>{title} - Next Shop</title>
          <meta name='description' content='Next Shop App' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header>
          <NavBar/>
        </header>
        <main className='px-6 py-4'>
          <Title>{title}</Title>
          {children}
        </main>
      </>
    );
}
