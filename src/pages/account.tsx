import { useAuth } from "../context/authContext";

export default function AccountPage() {
  const { user, signIn, signOut } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">You are not signed in</h2>
        <button
          onClick={() => signIn("github")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In with GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Account Information</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Email:</span>
          <span>{user.email}</span>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
