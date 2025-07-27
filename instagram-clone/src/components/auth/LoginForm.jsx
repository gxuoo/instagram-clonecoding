import { useState, useCallback, memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { mockLogin } from "../../api/auth";
import useAuthStore from "../../store/authStore";
import Button from "../common/Button";
import Input from "../common/Input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const isValid = username && password;

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      if (!isValid) return;

      try {
        const userData = await mockLogin(username, password);
        login(userData);
        navigate("/Home");
      } catch (err) {
        setError(err.message);
      }
    },
    [isValid, login, navigate, password, username]
  );

  return (
    <form
      className="bg-white dark:bg-black border border-gray-300 dark:border-[#555555] px-10 pt-10 pb-6 flex flex-col items-center"
      onSubmit={handleLogin}
    >
      <img
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
        alt="Instagram Logo"
        className="w-44 mb-8 mt-2 dark:invert"
        draggable={false}
      />
      <Input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="dark:bg-[#121212] dark:border-[#555555] dark:text-white"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="dark:bg-[#121212] dark:border-[#555555] dark:text-white"
      />
      <Button disabled={!isValid}>로그인</Button>
      {error && (
        <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
      )}

      <div className="flex items-center w-full my-3">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
        <span className="mx-4 text-xs font-semibold text-gray-400 dark:text-gray-500">
          또는
        </span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-2 text-sm text-[#3579EA] font-semibold w-full my-2 hover:cursor-pointer"
      >
        <svg
          aria-label="Facebook으로 로그인"
          fill="currentColor"
          height="20"
          role="img"
          viewBox="0 0 16 16"
          width="20"
        >
          <g clip-path="url(#a)">
            <path
              d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <rect fill="currentColor" height="16" width="16"></rect>
            </clipPath>
          </defs>
        </svg>
        Facebook으로 로그인
      </button>

      <Link
        to="/password/reset"
        className="text-sm font-bold mt-3 text-black dark:text-white hover:text-gray-500"
      >
        비밀번호를 잊으셨나요?
      </Link>
    </form>
  );
};

export default memo(LoginForm);
