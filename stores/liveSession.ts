import create from 'zustand';

type State = {
  netId: string;
  setNetId: (netId: string) => void;
};

const useLiveSessionStore = create<State>((set) => ({
  netId: null,
  setNetId: (netId) => set({ netId }),
}));

export default useLiveSessionStore;