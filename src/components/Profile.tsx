import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/aldenfachetti.png" alt="Avatar Alden Fachetti"/>
      <div>
        <strong>Alden Fachetti</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem ilustrativa de level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}