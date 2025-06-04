import ThoughtList from '../components/ThoughtList/index.tsx';
import ThoughtForm from '../components/ThoughtForm/index.tsx';
import { useEffect, useState } from 'react';
import { getAllThoughts } from '../utils/api.ts';

const Home = () => {
  const [thoughts, setThoughts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllThoughts();
      const json = await res.json();
      setThoughts(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm setThoughts={setThoughts} />
        </div>
        <div className="col-12 col-md-8 mb-3">
          <ThoughtList
            thoughts={thoughts}
            title="Some Feed for Thought(s)..."
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
