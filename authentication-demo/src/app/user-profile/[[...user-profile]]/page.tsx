import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <UserProfile path="/user-profile"/>
    </div>
  );
}