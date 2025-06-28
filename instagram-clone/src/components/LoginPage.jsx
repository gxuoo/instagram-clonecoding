import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../../../instagram-clone/src/api/auth";
import useAuthStore from "../store/authStore";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const isValid = username && password;

  const handleLogin = async () => {
    try {
      const userData = await mockLogin(username, password);
      login(userData); // 여기서 로컬스토리지에 저장됨
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // 하단은 기존과 동일하게 사용하셔도 됩니다.
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-row justify-center items-center w-full max-w-5xl py-10">
        {/* 좌측: 휴대폰 이미지 */}
        <div className="hidden md:flex flex-1 justify-end ml-30">
          <div className="relative w-[380px] h-[581px]">
            <img
              src="/assets/phone-mockup-back.png"
              alt="Instagram Phone Back"
              className="absolute left-0 top-0 w-[250px] h-[500px] object-contain z-0"
              draggable={false}
            />
            <img
              src="/assets/phone-mockup-front.png"
              alt="Instagram Phone Front"
              className="absolute left-10 top-8 w-[250px] h-[500px] object-contain z-10"
              draggable={false}
            />
          </div>
        </div>
        {/* 우측: 로그인 카드 */}
        <div className="flex flex-col flex-1 max-w-[350px] w-full mr-40">
          {/* 로그인 카드 */}
          <div className="bg-white border border-gray-300 px-10 pt-10 pb-6 flex flex-col items-center">
            {/* 로고 */}
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="Instagram Logo"
              className="w-44 mb-8 mt-2"
              draggable={false}
            />
            {/* 입력폼 */}
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-2 px-3 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-2 px-3 py-2 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <button
              onClick={handleLogin}
              disabled={!isValid}
              className={`w-full text-sm font-semibold text-white py-2 rounded ${
                isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-200"
              } mt-1 mb-3`}
            >
              로그인
            </button>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

            {/* 또는 구분선 */}
            <div className="flex items-center w-full my-3">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="mx-4 text-xs font-semibold text-gray-400">
                또는
              </span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Facebook 로그인 */}
            <button className="flex items-center justify-center gap-2 text-sm text-blue-900 font-semibold w-full mb-2">
              <img
                src="/assets/facebook-logo.webp"
                alt="facebook"
                className="w-5 h-5"
              />
              Facebook으로 로그인
            </button>

            {/* 비밀번호 찾기 */}
            <a
              href="find-password"
              className="text-xs text-blue-900 mt-3 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </a>
          </div>

          {/* 회원가입 유도 */}
          <div className="bg-white border border-gray-300 text-center py-4 mt-2 text-sm">
            계정이 없으신가요?{" "}
            <a
              href="/member"
              className="text-blue-500 font-semibold hover:underline"
            >
              가입하기
            </a>
          </div>

          {/* 앱 다운로드 안내 */}
          <div className="flex flex-col items-center mt-6">
            <p className="text-xs mb-3">앱을 다운로드하세요.</p>
            <div className="flex gap-2">
              <a
                href="https://apps.apple.com/app/instagram/id389801252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/AppStore.png"
                  alt="App Store"
                  className="h-10"
                  width={136}
                  height={40}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Google-Play.png"
                  alt="Google Play"
                  className="h-10"
                  width={136}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 푸터 */}
      <footer className="w-full flex justify-center mt-8 text-xs text-gray-400">
        <div className="flex gap-4 flex-wrap justify-center">
          <span>Meta</span>
          <span>소개</span>
          <span>블로그</span>
          <span>채용 정보</span>
          <span>도움말</span>
          <span>API</span>
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>위치</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>연락처 업로드 & 비사용자</span>
          <span>Meta Verified</span>
        </div>
      </footer>
    </div>
  );
}
