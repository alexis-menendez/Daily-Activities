import type React from 'react';
import profilePic from '../assets/profile_placeholder.jpg';

type Styles = {
  card: React.CSSProperties,
  heroImg: React.CSSProperties,
  cardArticle: React.CSSProperties,
  cardImg: React.CSSProperties,
  cardH3: React.CSSProperties,
  cardP: React.CSSProperties,
}
type CardProps = {
  styles: Styles
}

const ProfileCard = ({styles}: CardProps) => {
  return (
    <section style={styles.card}>
      <section style={styles.heroImg}>
      <img
        src={profilePic}
        alt='man taking photograph of viewer, face is obscured by the camera'
        style={styles.cardImg}
      />
      </section>
      <article style={styles.cardArticle}>
        <h3 style={styles.cardH3}>Amadi Tahel - Photographer</h3>
        <p style={styles.cardP}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          nemo, nam quia eveniet nobis minus sunt non officiis eligendi? Animi
          iure architecto assumenda natus illum dolor voluptate vero illo
          excepturi.
        </p>
      </article>
    </section>
  );
};

export default ProfileCard;
