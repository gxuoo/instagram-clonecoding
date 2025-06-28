export default function SuggestedUsers() {
  const suggestedUsers = [
    {
      id: 1,
      username: "user1",
      profilePicture: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      username: "user2",
      profilePicture: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      username: "user3",
      profilePicture: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">추천 사용자</h2>
      <ul>
        {suggestedUsers.map((user) => (
          <li key={user.id} className="flex items-center mb-3">
            <img
              src={user.profilePicture}
              alt={user.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-medium">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
