import React from "react";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";

const ElectionTypeGroupButtons = () => {
  const setIdEleccion = useElectionInfoStore((state) => state.setIdEleccion);

  const idEleccion = useElectionInfoStore((state) => state.idEleccion);

  const paramsString = window.location.search;

  const searchParams = new URLSearchParams(paramsString);

  return (
    <div className="my-4 flex justify-around">
      <button
        className={`text-transparent bg-clip-text font-mono bg-gradient-to-r p-2 from-gray-500 to-gray-500 hover:from-sky-400 hover:to-sky-200 ${
          idEleccion === "1" ? "from-sky-400 to-sky-200" : ""
        }`}
        onClick={() => {
          searchParams.set("idEleccion", "1");
          setIdEleccion("1");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        PASO
      </button>
      <button
        className={`text-transparent bg-clip-text font-mono bg-gradient-to-r p-2 from-gray-500 to-gray-500 hover:from-sky-400 hover:to-sky-200 ${
          idEleccion === "2" ? "from-sky-400 to-sky-200" : ""
        }`}
        onClick={() => {
          searchParams.set("idEleccion", "2");
          setIdEleccion("2");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        GENERALES
      </button>
      <button
        className={`text-transparent bg-clip-text font-mono bg-gradient-to-r p-2 from-gray-500 to-gray-500 hover:from-sky-400 hover:to-sky-200 ${
          idEleccion === "3" ? "from-sky-400 to-sky-200" : ""
        }`}
        onClick={() => {
          searchParams.set("idEleccion", "3");
          setIdEleccion("3");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        BALOTAJE
      </button>
    </div>
  );
};

export default ElectionTypeGroupButtons;
