import type React from 'react';
import Card from "../components/Card";


// When we use the React provided React.CSSProperties interface, we can ensure that only known properties can be used as keys for styling and that only accepted values/types are permitted for those keys.
type Styles = {
  card: React.CSSProperties,
  cardArticle: React.CSSProperties,
  cardImg: React.CSSProperties,
  cardH3: React.CSSProperties,
  cardP: React.CSSProperties,
}

const styles: Styles = {
  card: {
    // This would cause an error because a boolean is not a valid value/type for borderRadius
    // ! Error Example: Type 'true' is not assignable to type 'BorderRadius<string | number> | undefined'.
    // borderRadius: true,
    borderRadius: '20px',

    // This would cause an error because 25 is not a valid CSS property key
    // ! Error Example: Object literal may only specify known properties, and '25' does not exist in type 'Properties<string | number, string & {}>'
    // 25: '20px',
    backgroundColor: 'var(--accent-color)',
    border: '3px solid var(--secondary-color)',
    width: '400px',
    padding: '20px',
  },
  cardArticle: {
    backgroundColor: 'var(--secondary-color)',
    borderRadius: '10px',
    padding: '5px 10px',
  },
  cardImg: {
    borderRadius: '20px',
    width: '100%',
  },
  cardH3: {
    textAlign: 'left',
  },
  cardP: {
    textAlign: 'left',
  }
}

const Gallery = () => {
  return (
    <Card styles={styles}/>
  )
}

export default Gallery;