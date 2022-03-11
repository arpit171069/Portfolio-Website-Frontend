import type { NextPage } from 'next';
import Head from 'next/head';
import lottie from 'lottie-web';
import wipJson from '../public/workinprogress.json';
import { WorkInProgress } from '../components';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {

  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: wipJson
      });
      anim.setSpeed(2.5);
    }
  }, [container]);

  return (
    <>
      <Head>
        <title>Arpit Verma</title>
        <meta name="description" content="Arpit Verma Portfolio Website Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <main className="w-screen h-screen flex landscape:flex-row lg:flex-row flex-col z-1 2xl:px-48 lg:px-36 md:px-12 sm:px-4 px-2 lg:pb-4 landscape:pb-4 pb-2">
        <div className="containerIndex grow flex items-end" ref={container}></div>
        <WorkInProgress />
      </main>
    </>
  )
}

export default Home;