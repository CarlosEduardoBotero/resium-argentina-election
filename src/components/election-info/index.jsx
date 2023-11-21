import React from "react";
import { useSelectElectionTypeStore } from "../../store/useSelectElectionType";
import { useQuery } from "react-query";
import Skeleton from "./skeleton";
import Error from "./error";

const ElectionInfo = () => {
  const electionType = useSelectElectionTypeStore(
    (state) => state.electionType
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["datosTotalizados", { electionType }],
    staleTime: Infinity,
    queryFn: async () => {
      const response = await fetch(
        `https://resultados.mininterior.gob.ar/api/resultado/totalizado?año=2023&recuento=Provisorio&idEleccion=${electionType}&idCargo=1&idDistrito=0`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data;
    },
    enabled: Boolean(electionType),
  });

  const gallery = Object.values(
    import.meta.glob("../../assets/partidos/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  if (isLoading) return <Skeleton />;

  if (error) return <Error />;

  return (
    <div>
      <p className="text-2xl my-4 pt-4 border-t border-gray-600">
        Recuento {data?.Recuento}
      </p>
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
      <h2 className="my-4 text-2xl border-t pt-4 border-gray-600">
        Agrupaciones
      </h2>
      <div>
        {data?.agrupaciones.map((data) => {
          return (
            <div
              className="border border-gray-600 rounded-sm p-2 mb-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2"
              style={{ borderColor: data?.color }}
              key={data?.nombre}
            >
              <img
                src={gallery.find((image) => {
                  var imageRegex = new RegExp(`${data?.nombre}`, "g");
                  return imageRegex.test(image);
                })}
                height="30px"
                width="30px"
                className="w-10 rounded-sm"
              />
              <div className="self-center" style={{ color: data?.color }}>
                {data?.nombre}
              </div>
              <div className="col-start-2 flex justify-between ">
                <p className="text-gray-500">
                  {Intl.NumberFormat("es-AR").format(data?.votos)} Votos
                </p>
                <p className="font-semibold">{data?.porcentaje}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElectionInfo;
