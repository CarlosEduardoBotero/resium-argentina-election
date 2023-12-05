import { CameraFlyTo } from "resium";
import { Cartesian3, Math } from "cesium";
import { TIERRA_DEL_FUEGO_COORDINATES } from "../../data/tierra_del_fuego_coordinates";
import { PROVINCIA_DE_BUENOS_AIRES_COORDINATES } from "../../data/provincia_de_buenos_aires_coordinates";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";
import { useQuery } from "react-query";
import ProvinciaEntity from "./ProvinciaEntity";

const ArgentinaPolygon = () => {
  const idEleccion = useElectionInfoStore((state) => state.idEleccion);

  const { data } = useQuery({
    queryKey: ["geojson", { idEleccion }],
    staleTime: Infinity,
    queryFn: async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/mapas?año=2023&recuento=Provisorio&idEleccion=${idEleccion}&idCargo=1&idDistrito=0&id_indra=00&tipo=departamentos&minimizado=true`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const modifiedArray = data.features.map((feature) => {
        if (feature.id === 28) {
          return {
            ...feature,
            geometry: {
              ...feature["geometry"],
              coordinates: TIERRA_DEL_FUEGO_COORDINATES,
            },
          };
        }
        if (feature.id === 23) {
          return {
            ...feature,
            geometry: {
              ...feature["geometry"],
              coordinates: PROVINCIA_DE_BUENOS_AIRES_COORDINATES,
            },
          };
        }
        return feature;
      });

      return modifiedArray;
    },
    enabled: Boolean(idEleccion),
    keepPreviousData: true,
  });

  const ARGENTINA_COORD = Cartesian3.fromDegrees(
    Number(-70.3814394),
    Number(-54.89901),
    7000000
  );

  return (
    <>
      {data?.length > 0 &&
        data?.map(({ geometry: { coordinates }, properties }) => {
          return (
            <ProvinciaEntity
              key={properties.ID_INDRA}
              provincia={properties.PROVINCIA}
              ID_INDRA={properties.ID_INDRA}
              coordinates={coordinates}
              color={properties.agrupacion.color}
              votos={properties.agrupacion.votos}
            />
          );
        })}
      {data?.length > 0 && (
        <CameraFlyTo
          destination={ARGENTINA_COORD}
          orientation={{
            heading: Math.toRadians(7.0),
            pitch: Math.toRadians(-75.0),
            roll: 0.0,
          }}
        />
      )}
    </>
  );
};

export default ArgentinaPolygon;
