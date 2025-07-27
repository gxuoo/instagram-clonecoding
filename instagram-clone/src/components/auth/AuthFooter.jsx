import React from "react";
import { LOGIN_FOOTER } from "../../constants/loginFooter";
import { LANGUAGES } from "../../constants/languages";

export default function AuthFooter() {
  return (
    <footer className="flex w-full h-full flex-col shrink-0 justify-center text-xs text-gray-400">
      <div className="flex flex-col items-center justify-center gap-6 mt-8">
        <div className="flex gap-4 flex-wrap justify-center">
          {LOGIN_FOOTER.map((link) => (
            <span key={link} className="hover:cursor-pointer hover:underline">
              {link}
            </span>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <select
            aria-label="표시 언어 변경"
            className="text-gray-400 hover:cursor-pointer bg-transparent border-none"
            defaultValue="ko"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
}
