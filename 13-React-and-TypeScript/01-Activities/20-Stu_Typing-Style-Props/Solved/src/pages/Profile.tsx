import type React from 'react';
import ProfileCard from "../components/ProfileCard";
import mountain from '../assets/mountain_placeholder.png';


// When we use the React provided React.CSSProperties interface, we can ensure that only known properties can be used as keys for styling and that only accepted values/types are permitted for those keys.
type Styles = {
  card: React.CSSProperties,
  heroImg: React.CSSProperties,
  cardArticle: React.CSSProperties,
  cardImg: React.CSSProperties,
  cardH3: React.CSSProperties,
  cardP: React.CSSProperties,
}

const styles: Styles = {
  card: {
    borderRadius: '20px',
    backgroundColor: 'var(--accent-color)',
    border: '3px solid var(--secondary-color)',
    width: '50%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  heroImg: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${mountain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '10px 10px 0 0',
    width: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'flex-end'
  },
  cardArticle: {
    backgroundColor: 'var(--secondary-color)',
    borderRadius: '0 0 10px 10px',
    padding: '5px 10px',
  },
  cardImg: {
    borderRadius: '0 5px 0 0',
    width: '120px',
    height: 'auto'
  },
  cardH3: {
    textAlign: 'left',
  },
  cardP: {
    textAlign: 'left',
  }
}

const Profile = () => {
  return (
    <ProfileCard styles={styles}/>
  )
}

export default Profile;