import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icons/Icon";
import useFetch from "../../hooks/useFetch";
import { API_ROUTES } from "../../constants/api";

const Story = ({ avatar, username }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // 실제 앱에서는 여기에서 스토리를 보여주는 모달을 열거나 페이지를 이동합니다.
  };

  const borderStyle = isClicked
    ? "bg-gray-300 dark:bg-gray-700"
    : "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500";

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0"
      onClick={handleClick}
    >
      <div className="relative w-21 h-21">
        <div
          className={`absolute inset-0 rounded-full p-1 transition-colors ${borderStyle}`}
        >
          <div className="bg-white dark:bg-black p-0.5 rounded-full h-full w-full">
            <img
              src={avatar}
              alt={username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <span className="text-sm truncate w-16 text-center dark:text-white">
        {username}
      </span>
    </div>
  );
};

const Stories = () => {
  const { data: stories, loading, error } = useFetch(API_ROUTES.STORIES);
  const scrollContainerRef = useRef(null);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsPrevVisible(scrollLeft > 0);
      setIsNextVisible(scrollWidth - clientWidth > scrollLeft + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll(); // 초기 상태 설정
      container.addEventListener("scroll", handleScroll);
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [stories]); // stories 데이터가 로드되면 스크롤 상태를 다시 계산

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <div>스토리 로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <div className="w-full min-h-34 py-2 px-2.5 mb-6 relative">
      <div
        ref={scrollContainerRef}
        className="flex space-x-5 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {stories && stories.map((story) => <Story key={story.id} {...story} />)}
      </div>

      {isPrevVisible && (
        <button
          onClick={() => scroll("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-7 h-7 flex items-center 
    justify-center shadow-md text-gray-700 hover:bg-white transition-all z-10"
        >
          <Icon name="chevronLeft" className="w-4 h-4" />
        </button>
      )}

      {isNextVisible && (
        <button
          onClick={() => scroll("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-7 h-7 flex items-center 
    justify-center shadow-md text-gray-700 hover:bg-white transition-all z-10"
        >
          <Icon name="chevronRight" className="w-4 h-4" />
        </button>
      )}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; 
    scrollbar-width: none; }`}</style>
    </div>
  );
};

export default Stories;
