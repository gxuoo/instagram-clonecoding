// Stroies.jsx
function Stroies() {
  return (
    <div>
      <div className="flex overflow-x-auto p-4 space-x-4 bg-white border rounded-lg shadow-sm">
        {[1, 2, 3, 4, 5].map((id) => (
          <div key={id} className="flex flex-col items-center">
            <img
              src={`/story${id}.jpg`}
              className="w-16 h-16 rounded-full border-2 border-blue-500"
              alt={`스토리 ${id}`}
            />
            <span className="text-xs mt-1">username{id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stroies;
