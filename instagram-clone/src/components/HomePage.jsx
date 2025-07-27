import React, { useEffect } from "react";
import useAuthStore from "../store/authStore";
import useWindowSize from "../hooks/useWindowSize";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

export default function HomePage() {
  const user = useAuthStore((state) => state.user);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!user) {
      console.log("로그인 페이지로 리다이렉트");
      // 실제 앱에서는 navigate("/login") 등을 사용합니다.
    }
  }, [user]);

  if (!user) {
    return <div>로딩 중이거나 로그인 페이지로 리다이렉트 중...</div>;
  }

  return (
    <div className="w-full dark:bg-black">
      {width < 768 ? (
        <MobileLayout user={user} />
      ) : (
        <DesktopLayout user={user} width={width} />
      )}
    </div>
  );
}
