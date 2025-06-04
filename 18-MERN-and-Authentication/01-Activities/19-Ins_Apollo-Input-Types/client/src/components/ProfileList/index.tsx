import { Link } from 'react-router-dom';
import type React from 'react';

// Define the Profile type, updating it to match the Profile model in the server
interface Profile {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  skills: string[];
}

interface ProfileListProps {
  profiles: Profile[];
  title: string;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles?.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                // ! With the changes to the Profile type, we need to update the ProfileList component to reflect those changes.
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.firstName} {profile.lastName} ({profile.username}) <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? profile.skills.length : 0}{' '}
                    endorsed skill
                    {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
