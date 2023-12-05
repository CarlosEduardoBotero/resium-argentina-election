import React from "react";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";
import ElectionTypeButtons from "../../components/election-type-buttons";
import ElectionInfo from "../../components/election-info";

const SideBar = () => {
  const idEleccion = useElectionInfoStore((state) => state.idEleccion);

  return (
    <div className="fixed top-0 bottom-0 left-0 w-96 z-50 bg-slate-950 p-3 overflow-y-scroll flex flex-col">
      <h1 className="text-gray-200 text-4xl mb-1">Elecciones Argentina</h1>
      <p className="text-gray-500 text-lg mb-4">PRESIDENTE/A | 2023</p>
      <ElectionTypeButtons />
      {idEleccion && <ElectionInfo />}
      <p className="mt-auto pt-4">
        Desarrollado por{" "}
        <a
          className="bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text hover:border-b border-blue-500 "
          target="_blank"
          href="https://www.linkedin.com/in/carlos-eduardo-botero/"
        >
          Carlos Botero
        </a>
      </p>
    </div>
  );
};

export default SideBar;
