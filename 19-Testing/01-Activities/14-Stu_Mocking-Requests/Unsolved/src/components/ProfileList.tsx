import { useEffect, useState } from 'react';

export default function ProfileList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className='container p-4'>
        <div className='text-center p-4 m-4'>
          <h1>Profiles</h1>
        </div>
        <div className='text-center row g-2'>
          {users.map((user: {name: string; email: string; phone: string}, index) => (
            <div key={index} className="col-12 col-lg-3 profile-card">
              <div className="p-3 card">
                <h2>{user.name}</h2>
                  <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
