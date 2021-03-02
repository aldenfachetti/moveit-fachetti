import React from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


// funcao getServerSideProps dentro de um pagina do next,
// consigo manipular quais dados são repassados dessa
// camada Next p/ camada front-end
// PS: so funciona em pages > index.tsx

// Tudo que faco aqui dentro da funcao excuta no servidor
  // node e não no browser do usuario.
  // Os crawlersda web por padrão esperam os servidores darem
  // um resposta (finalizar ela) pra então indexar aquela pagina
export const getServerSideProps: GetServerSideProps = async (contexts) => {

  const { level, currentExperience, challengesCompleted } = contexts.req.cookies;

  return {
    props: {
      level: +level,
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
// Back-end (Ruby, JavaScript, PHP, etc)
// Next.js (Node.js)
// Front-end (React.js)
