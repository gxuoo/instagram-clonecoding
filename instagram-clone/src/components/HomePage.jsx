import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

// mock 데이터 정의
const mockStories = [
  { id: 1, username: "rbqls0209" },
  { id: 2, username: "0rka_wk0" },
  { id: 3, username: "hynam12_0" },
  { id: 4, username: "boyemian" },
  { id: 5, username: "jeong_bu..." },
  { id: 6, username: "s_m_c619" },
];

const mockFeed = [
  {
    id: 1,
    username: "hanwhaeagles_soori",
    verified: true,
    time: "3시간",
    location: "대전 한화생명 불파크 – Daejeon Hanwha Life Ballpark",
    image:
      "https://pplx-res.cloudinary.com/image/private/user_uploads/65627391/dcd776bd-1daa-4a21-9b43-b2bb7ba158ad/image.jpg",
    description: "THE AMAZING PONCE 18 STRIKEOUTS!",
  },
];

const mockRecommendations = [
  {
    id: 1,
    username: "w__anie",
    desc: "hae__yoon1220님 외 15명이 팔로우합니다.",
    action: "팔로우",
  },
  {
    id: 2,
    username: "kbo.official",
    desc: "snstmp_0님 외 15명이 팔로우합니다.",
    action: "팔로우",
    verified: true,
  },
  {
    id: 3,
    username: "ej____98",
    desc: "jwjxjxjune님 외 8명이 팔로우합니다.",
    action: "팔로우",
  },
  {
    id: 4,
    username: "hyebin__s",
    desc: "hynam12_0님 외 14명이 팔로우합니다.",
    action: "팔로우",
  },
  {
    id: 5,
    username: "yeonxi_____",
    desc: "khh4009님 외 9명이 팔로우합니다.",
    action: "팔로우",
  },
];

export default function HomePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* 좌측 메뉴 */}
      <aside className="w-64 p-6 border-r border-gray-200 flex flex-col gap-6">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="Instagram Logo"
          className="items-center w-26 mb-4 mt-4"
          draggable={false}
        />
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>🏠</span> 홈
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>🔍</span> 검색
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>🧭</span> 탐색 탭
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>🎬</span> 릴스
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>✉️</span> 메시지
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-xs">
              3
            </span>
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>❤️</span> 알림
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>➕</span> 만들기
          </button>
          <button className="flex items-center gap-3 text-lg font-medium">
            <span>👤</span> 프로필
          </button>
        </nav>
        <button className="mt-auto flex items-center gap-3 text-lg font-medium">
          <span>🧵</span> Threads
        </button>
        <button className="flex items-center gap-3 text-lg font-medium">
          <span>☰</span> 더 보기
        </button>
      </aside>

      {/* 중앙 피드 */}
      <main className="flex-1 flex flex-col items-center py-8">
        {/* 스토리 */}
        <div className="flex gap-4 mb-8">
          {mockStories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-400 mb-2" />
              <span className="text-xs">{story.username}</span>
            </div>
          ))}
        </div>
        {/* 피드 카드 */}
        {mockFeed.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md w-[470px] mb-8"
          >
            <div className="flex items-center px-4 pt-4 pb-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-3" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-bold text-sm">{post.username}</span>
                  {post.verified && (
                    <span className="ml-1 text-blue-500">✔️</span>
                  )}
                  <span className="ml-2 text-xs text-gray-500">
                    {post.time}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{post.location}</span>
              </div>
              <span className="ml-auto">•••</span>
            </div>
            <img
              src={post.image}
              alt="피드 이미지"
              className="w-full"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
            <div className="p-4">
              <div className="font-bold text-sm mb-1">{post.username}</div>
              <div className="text-sm">{post.description}</div>
            </div>
          </div>
        ))}
        {/* 로그아웃 버튼 */}
        <button
          className="mt-4 text-sm bg-gray-300 px-4 py-2 rounded"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          로그아웃
        </button>
      </main>

      {/* 우측 추천 */}
      <aside className="w-80 p-6 border-l border-gray-200 hidden xl:block">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
          <div>
            <div className="flex items-center">
              <span className="font-medium text-sm">gxu_oo</span>
            </div>
            <span className="text-xs text-gray-500">규영</span>
          </div>
        </div>
        <button className="text-blue-500 font-semibold text-sm">전환</button>
        <div className="font-semibold mb-4">회원님을 위한 추천</div>
        <ul className="flex flex-col gap-4">
          {mockRecommendations.map((rec) => (
            <li key={rec.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm">{rec.username}</span>
                    {rec.verified && (
                      <span className="ml-1 text-blue-500">✔️</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{rec.desc}</span>
                </div>
              </div>
              <button className="text-blue-500 font-semibold text-sm">
                {rec.action}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
