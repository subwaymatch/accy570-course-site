import create from 'zustand';

type State = {
  netId: string;
  setNetId: (netId: string) => void;
  saveResponse: (questionFullId: string, isSuccess: boolean) => void;
};

const useLiveSessionStore = create<State>((set, get) => ({
  netId:
    typeof window !== 'undefined'
      ? localStorage.getItem('netId')
        ? localStorage.getItem('netId')
        : ''
      : '',
  setNetId: (netId) => {
    localStorage.setItem('netId', netId);

    set({ netId });
  },
  saveResponse: (questionFullId, isSuccess) => {
    const netId = get().netId;

    console.log(
      `afterSubmit, questionFullId=${questionFullId}, netId=${netId}`
    );
  },
}));

export default useLiveSessionStore;
