import React, { useState, useEffect, memo } from "react";

// 실제 앱에서는 다른 스크린샷 이미지 경로를 사용해야 합니다.
// 여기서는 캐러셀 효과 시연을 위해 하나의 이미지를 사용합니다.
const screenshots = [
  "/assets/phone-mockup-image1.png",
  "/assets/phone-mockup-image2.png",
  "/assets/phone-mockup-image3.png",
];

const PhoneCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 3500); // 3.5초마다 이미지 변경

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-[468.32px] h-[634.15px]">
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src={"/assets/phone-mockup-back.png"}
          alt={"Phone Mockup Back"}
          className={"absolute inset-0 w-full h-full"}
          draggable={false}
        />
      </div>
      {/* 순환되는 스크린샷 */}
      <div className="absolute top-[26px] left-[160px] w-[250px] h-[538px] overflow-hidden">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex % 3 ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(PhoneCarousel);
