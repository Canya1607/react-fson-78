import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { Title } from './Title.styled';

export const Card = ({ fName, sName }) => {
  return (
    <div className={styles.card}>
      <Title borderColor={'red'}>BIO</Title>
      <p className={styles.text}>
        First Name: <span className={styles.name}>{fName}</span>
      </p>
      <p className={styles.text}>
        Second name: <span className={styles.name}>{sName}</span>
      </p>
      <p className={styles.texRight}>Country: Ukraine</p>
    </div>
  );
};

Card.propTypes = {
  fName: PropTypes.string.isRequired,
  sName: PropTypes.string.isRequired
};
