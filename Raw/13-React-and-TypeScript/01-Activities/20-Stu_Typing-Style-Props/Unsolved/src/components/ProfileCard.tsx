import profilePic from '../assets/profile_placeholder.jpg';


// TODO: Add the correct React interfaces/types to the style props


// TODO: Uncomment once Styles are defined
// type CardProps = { 
//   styles: Styles
// } 

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
