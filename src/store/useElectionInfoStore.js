import { create } from "zustand";

const paramsString = window.location.search;

const searchParams = new URLSearchParams(paramsString);

export const useElectionInfoStore = create((set) => ({
  idEleccion: searchParams.get("idEleccion") || "",
  idDistrito: searchParams.get("idDistrito") || 0,
  setIdEleccion: (idEleccion) => set({ idEleccion }),
  setIdDistrito: (idDistrito) => set({ idDistrito }),
}));
