import React from "react";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";
import { useQuery } from "react-query";
import Skeleton from "./skeleton";
import Error from "./error";
import PoliticalPartiesList from "../political-parties-list";

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
    <div>
      <p className="text-2xl mt-4 pt-4 border-t border-gray-600">
        Resultados {data?.Distrito}
      </p>
      <p className="mb-4 text-gray-500">Recuento {data?.Recuento}</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-gray-600 rounded-sm p-2">
          <p>Electores:</p>
          <p className="text-gray-500">
            {Intl.NumberFormat("es-AR").format(data?.Electores)}
          </p>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <p>Votantes:</p>
          <p className="text-gray-500">
            {Intl.NumberFormat("es-AR").format(data?.Votantes)}
          </p>
        </div>
        <div className="border border-gray-600 rounded-sm p-2 col-span-2">
          <p>Participación sobre escrutado:</p>
          <p className="text-gray-500">{data?.ParticipacionSobreEscrutado}%</p>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <p>Votos en blanco:</p>
          <p className="text-gray-500">
            {Intl.NumberFormat("es-AR").format(data?.blancos)}
          </p>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <p>Votos nulos:</p>
          <p className="text-gray-500">
            {Intl.NumberFormat("es-AR").format(data?.nulos)}
          </p>
        </div>
      </div>
      <div>
        {data?.agrupaciones && (
          <PoliticalPartiesList agrupaciones={data.agrupaciones} />
        )}
      </div>
    </div>
  );
};

export default ElectionInfo;
