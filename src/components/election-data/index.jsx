import argentinaFormat from "../../utils/argentinaFormat";

const ElectionData = ({
  electores,
  votantes,
  participacionSobreEscrutado,
  blancos,
  nulos,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="border border-gray-600 rounded-sm p-2">
        <p>Electores:</p>
        <p className="text-gray-500">{argentinaFormat(electores)}</p>
      </div>
      <div className="border border-gray-600 rounded-sm p-2">
        <p>Votantes:</p>
        <p className="text-gray-500">{argentinaFormat(votantes)}</p>
      </div>
      <div className="border border-gray-600 rounded-sm p-2 col-span-2">
        <p>Participación sobre escrutado:</p>
        <p className="text-gray-500">{participacionSobreEscrutado}%</p>
      </div>
      <div className="border border-gray-600 rounded-sm p-2">
        <p>Votos en blanco:</p>
        <p className="text-gray-500">{argentinaFormat(blancos)}</p>
      </div>
      <div className="border border-gray-600 rounded-sm p-2">
        <p>Votos nulos:</p>
        <p className="text-gray-500">{argentinaFormat(nulos)}</p>
      </div>
    </div>
  );
};

export default ElectionData;
