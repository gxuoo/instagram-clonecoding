import { Link } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import AuthFooter from "./auth/AuthFooter";
import PhoneCarousel from "./auth/PhoneCarousel";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full min-h-[100vh] bg-white dark:bg-black">
      <main className="flex flex-col justify-center items-center mt-8 mx-6">
        <div className="flex flex-row justify-center items-center w-full">
          {/* 좌측: 휴대폰 캐러셀 이미지 */}
          <div className="hidden md:block">
            <PhoneCarousel />
          </div>

          {/* 우측: 로그인 영역 */}
          <div className="flex flex-col w-full max-w-[350px]">
            <LoginForm />

            <div className="bg-white dark:bg-black border border-gray-300 dark:border-[#555555] text-center py-6 mt-2.5 text-sm dark:text-white">
              계정이 없으신가요?{" "}
              <Link to="/signup" className="text-[#3579EA] font-semibold">
                가입하기
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
