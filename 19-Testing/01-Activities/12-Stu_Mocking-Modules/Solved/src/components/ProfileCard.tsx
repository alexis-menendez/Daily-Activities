import ProfileDetails from "./ProfileDetails";

export default function ProfileCard({ user }: { user: { name: string; email: string; phone: string } }) {
  return (
    <div className="col-12 col-lg-3 profile-card">
      <div className="p-3 card">
        <h2>{user.name}</h2>
        <ProfileDetails user={user} />
      </div>
    </div>
  );
} 
