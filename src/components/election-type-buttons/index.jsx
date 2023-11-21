import React from "react";
import { useSelectElectionTypeStore } from "../../store/useSelectElectionType";

const ElectionTypeGroupButtons = () => {
  const setElectionType = useSelectElectionTypeStore(
    (state) => state.setElectionType
  );

  const electionType = useSelectElectionTypeStore(
    (state) => state.electionType
  );

  const paramsString = window.location.search;

  const searchParams = new URLSearchParams(paramsString);

  return (
    <div className="my-4 flex justify-around">
      <button
        className={`transition-all duration-1000 ease-in-out font-mono p-2 ${
          electionType === "1"
            ? "bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text "
            : "bg-gradient-to-r from-gray-500 to-gray-500 text-transparent bg-clip-text "
        }`}
        onClick={() => {
          searchParams.set("eleccion", "1");
          setElectionType("1");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        PASO
      </button>
      <button
        className={`transition-all duration-500 ease-in-out font-mono p-2 ${
          electionType === "2"
            ? "bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text "
            : "bg-gradient-to-r from-gray-500 to-gray-500 text-transparent bg-clip-text "
        }`}
        onClick={() => {
          searchParams.set("eleccion", "2");
          setElectionType("2");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        GENERALES
      </button>
      <button
        className={`transition-all duration-500 ease-in-out font-mono p-2 ${
          electionType === "3"
            ? "bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text "
            : "bg-gradient-to-r from-gray-500 to-gray-500 text-transparent bg-clip-text "
        }`}
        onClick={() => {
          searchParams.set("eleccion", "3");
          setElectionType("3");
          window.history.pushState({}, "", `?${searchParams.toString()}`);
        }}
      >
        BALOTAJE
      </button>
    </div>
  );
};

export default ElectionTypeGroupButtons;
