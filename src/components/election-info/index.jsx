import React from "react";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";
import { useQuery } from "react-query";
import Skeleton from "./skeleton";
import Error from "./error";
import PoliticalPartyCard from "../political-party-card";
import BallotageCandidateCard from "../ballotage-candidate-card";
import { ELECTION_ID } from "../../constants/election_ID";
import ElectionData from "../election-data";

const ElectionInfo = () => {
  const idEleccion = useElectionInfoStore((state) => state.idEleccion);
  const idDistrito = useElectionInfoStore((state) => state.idDistrito);

  const { data, isLoading, error } = useQuery({
    queryKey: ["datosTotalizados", { idEleccion, idDistrito }],
    staleTime: Infinity,
    queryFn: async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/resultado/totalizado?año=2023&recuento=Provisorio&idEleccion=${idEleccion}&idCargo=1&idDistrito=${idDistrito}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data;
    },
    enabled: Boolean(idEleccion),
  });

  if (isLoading) return <Skeleton />;

  if (error) return <Error />;

  return (
    <>
      {idEleccion === ELECTION_ID.BALOTAJE && (
        <>
          <p className="text-2xl mt-4 pt-4 border-t border-gray-600">
            Segunda Vuelta <span className="">{data?.Distrito}</span>
          </p>
          <p className="mb-4 text-gray-500">Recuento {data?.Recuento}</p>
          <div className="grid grid-rows-2 gap-2">
            {data.agrupaciones.map(
              ({ nombre, color, votos, porcentaje }, i) => (
                <BallotageCandidateCard
                  key={nombre}
                  i={i}
                  nombre={nombre}
                  color={color}
                  votos={votos}
                  porcentaje={porcentaje}
                />
              )
            )}
          </div>
        </>
      )}
      <p className="text-2xl mt-4 pt-4 border-t border-gray-600">
        Datos generales {data?.Distrito}
      </p>
      <p className="mb-4 text-gray-500">Recuento {data?.Recuento}</p>
      <ElectionData
        electores={data?.Electores}
        votantes={data?.Votantes}
        participacionSobreEscrutado={data?.ParticipacionSobreEscrutado}
        nulos={data?.nulos}
        blancos={data?.blancos}
      />
      {idEleccion !== ELECTION_ID.BALOTAJE && data?.agrupaciones && (
        <>
          <h2 className="my-4 text-2xl border-t pt-4 border-gray-600">
            Agrupaciones políticas
          </h2>
          <div className="flex flex-col gap-2">
            {data.agrupaciones.map(({ color, nombre, votos, porcentaje }) => (
              <PoliticalPartyCard
                key={nombre}
                color={color}
                nombre={nombre}
                votos={votos}
                porcentaje={porcentaje}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ElectionInfo;
