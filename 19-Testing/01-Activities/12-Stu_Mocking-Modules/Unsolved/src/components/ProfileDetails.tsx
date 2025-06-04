export default function ProfileDetails({ user }: { user: { name: string; email: string; phone: string } }) {
  return (
    <div>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}
