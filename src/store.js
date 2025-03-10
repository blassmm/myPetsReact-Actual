//Zuastand store
import { create } from 'zustand'

export const useRescuesStore = create((set) => ({
  rescates: "+5000",
  updateRescates: (newRescates) => {
    set({ rescates: newRescates })
  }
}))