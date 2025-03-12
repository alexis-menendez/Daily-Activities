import type React from 'react';
import mountain from '../assets/mountain_placeholder.png';

type Styles = {
  card: React.CSSProperties,
  cardArticle: React.CSSProperties,
  cardImg: React.CSSProperties,
  cardH3: React.CSSProperties,
  cardP: React.CSSProperties,
}
type CardProps = {
  styles: Styles
}

const Card = ({styles}: CardProps) => {
  return (
    <section style={styles.card}>
      <img
        src={mountain}
        alt='icy mountain with sun setting on right side'
        style={styles.cardImg}
      />
      <article style={styles.cardArticle}>
        <h3 style={styles.cardH3}>The nature in France was breathtaking</h3>
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

export default Card;
