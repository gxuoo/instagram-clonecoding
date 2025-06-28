export default function UserProfile() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">Username</h2>
          <p className="text-gray-500">Full Name</p>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Follow
      </button>
      <div className="mt-4">
        <p className="text-gray-700">Bio goes here...</p>
      </div>
    </div>
  );
}
