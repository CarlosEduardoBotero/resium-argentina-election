import { create } from "zustand";

const paramsString = window.location.search;

const searchParams = new URLSearchParams(paramsString);

export const useSelectElectionTypeStore = create((set) => ({
  electionType: searchParams.get("eleccion") || "",
  setElectionType: (electionType) => set({ electionType: electionType }),
}));
