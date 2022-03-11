import styles from '../styles/Projects.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';

const Projects: NextPage = () => {

    return (
        <>
            <Head>
                <title>Arpit Verma | Projects</title>
                <meta name="description" content="Arpit Verma Portfolio Website Projects Page" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <main className={`w-screen h-screen z-1 2xl:px-48 lg:px-36 md:px-12 sm:px-4 px-2 lg:pb-4 landscape:pb-4 pb-2 ${styles.projectspage}`}>
            </main>
        </>
    )
}

export default Projects;