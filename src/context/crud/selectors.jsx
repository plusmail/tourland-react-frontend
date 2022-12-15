const contextSelectors = (state) => {
  return {
    isPanelModalOpen: () => {
      return state.isPanelModalOpen;
    },
    isModalOpen: () => {
      return state.isModalOpen;
    },
    isPanelOpen: () => {
      return state.isPanelOpen;
    },
    isBoxOpen: () => {
      return state.isBoxOpen;
    },
  };
};

export default contextSelectors;
