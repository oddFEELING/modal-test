/** 🌹oddFEELING */

import create from 'zustand';

export const visibleState = create((set) => ({
  visible: false,
  setVisible: () =>
    set((state) => ({
      visible: !state.visible,
    })),
}));
