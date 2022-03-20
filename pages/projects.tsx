import styles from '../styles/Projects.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';

const Projects: NextPage = () => {

    return (
        <>
            <Head>
                <title>Arpit Verma | Projects</title>
                <meta name="description" content="Arpit Verma Portfolio Projects" />
                <meta property="og:title" content="Arpit Verma Portfolio Projects" />
                <meta property="og:description" content="This page is dedicated to projects made by Arpit Verma." />
                <meta property="og:site_name" content="Arpit Verma Portfolio Website | Projects Page" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <main className="w-screen h-screen z-1 2xl:px-48 lg:px-36 md:px-12 sm:px-4 px-2 lg:pb-4 landscape:pb-4 pb-2">
                <div className={styles.projectspage}></div>
                <h1 className="text-4xl md:text-8xl landscape:md:text-6xl landscape:xl:text-8xl font-quicksand text-center md:pt-8 pt-28 landscape:pt-8 pl-4">Projects</h1>
            </main>
        </>
    )
}

export default Projects;