// Feed.jsx
function Feed() {
  return (
    <div>
      {[1, 2, 3].map((id) => (
        <div key={id} className="bg-white border rounded mb-6">
          <div className="flex items-center p-3">
            <img
              src="/user.jpg"
              className="w-8 h-8 rounded-full mr-3"
              alt="유저 이미지"
            />
            <span className="font-semibold text-sm">username{id}</span>
          </div>
          <img src={`/post${id}.jpg`} className="w-full" alt="유저 아이디? " />
          <div className="p-3 text-sm">
            ❤️ 좋아요 123개
            <br />
            <span className="font-semibold">username{id}</span> 멋진 사진이에요!
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
