import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='top'>
      <header className='bg-primary text-light mb-4 py-3 flex-row align-center'>
        <div className='container flex-row justify-space-between-lg justify-center align-center'>
          <h1 className='m-0'>UI/UX Tips</h1>
          <p className='m-0'>Get practical advice from other developers.</p>
          <Link to='/feedback' className='m-0'>
            Submit Feedback
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
