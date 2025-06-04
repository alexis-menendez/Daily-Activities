import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <h1>
        <Link to='/' id='logo'>
          Film Tracker
        </Link>
      </h1>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/WatchList'
              className={
                currentPage === '/WatchList' ? 'nav-link active' : 'nav-link'
              }
            >
              WATCH LIST
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/SeenIt'
              className={
                currentPage === '/SeenIt' ? 'nav-link active' : 'nav-link'
              }
            >
              SEEN IT
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
