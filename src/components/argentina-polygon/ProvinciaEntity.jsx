import React from "react";
import { Cartesian3, Color } from "cesium";
import { Entity, PolygonGraphics } from "resium";
import { useElectionInfoStore } from "../../store/useElectionInfoStore";

const ProvinciaEntity = ({
  provincia,
  ID_INDRA,
  votos,
  color,
  coordinates,
}) => {
  const setIdDistrito = useElectionInfoStore((state) => state.setIdDistrito);

  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);

  const handleClickPolygon = (ID_INDRA) => {
    setIdDistrito(ID_INDRA);
    searchParams.set("idDistrito", ID_INDRA);
    window.history.pushState({}, "", "?" + searchParams.toString());
  };

  return (
    <Entity
      name={provincia}
      key={provincia}
      onClick={() => handleClickPolygon(ID_INDRA)}
    >
      <PolygonGraphics
        hierarchy={Cartesian3.fromDegreesArray(coordinates.flat(3))}
        material={Color.fromCssColorString(color)}
        extrudedHeight={votos / 5}
        outline
        outlineColor={Color.WHITE}
      />
    </Entity>
  );
};

export default ProvinciaEntity;
