import { create } from "zustand";

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const useThemeStore = create((set) => ({
  theme: getSystemTheme(), // 처음 로딩 시 시스템 테마 감지
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
