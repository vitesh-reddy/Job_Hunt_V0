import { create } from "zustand";

// Manages user data
const useUserStore = create((set) => ({
  user: { _id: "", name: "", identifier: "", identifierType: "" },
  setUser: (userData) => set({ user: { ...userData } }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;