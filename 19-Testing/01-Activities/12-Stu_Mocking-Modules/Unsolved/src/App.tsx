import ProfileCard from './components/ProfileCard';

const profiles = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '123-456-7890',
  },
  {
    name: 'Jane Smith',
    email: 'jane@smith.com',
    phone: '098-765-4321',
  },
  {
    name: 'Joe Schmoe',
    email: 'j@schmoe.com',
    phone: '567-890-1234',
  },
  {
    name: 'Tim Johnson',
    email: 'tj@johnson.com',
    phone: '345-678-9012',
  },
  {
    name: 'Sally Johnson',
    email: 's@johnson.com',
    phone: '234-567-8901',
  },
  {
    name: 'Bob Johnson',
    email: 'b@johnson.com',
    phone: '456-789-0123',
  },
];

function App() {

  return (
    <>
      <div className='container p-4'>
        <div className='text-center p-4 m-4'>
          <h1>Profiles</h1>
        </div>
        <div className='text-center row g-2'>
          {profiles.map((profile, index) => (
            <ProfileCard key={index} user={profile} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
