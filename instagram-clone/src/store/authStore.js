import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("userData")) || null,
  login: (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("userData");
    set({ user: null });
  },
}));

export default useAuthStore;
