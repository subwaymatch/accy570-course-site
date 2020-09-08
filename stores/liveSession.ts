import create from 'zustand';

const useLiveSessionStore = create((set) => ({
  netId: null,
  setNetId: (netId) => set({ netId }),
}));

export default useLiveSessionStore;
