import { BALLOTAGE_PARTIES_INFO } from "../../constants/ballotage_parties_info";
import argentinaFormat from "../../utils/argentinaFormat";

const BallotageCandidateCard = ({ nombre, color, votos, porcentaje, i }) => {
  const partyName = nombre;
  const politicalPartyInfo = BALLOTAGE_PARTIES_INFO[partyName];
  const flexDirection = i === 0 ? "flex-col" : "flex-col-reverse";
  return (
    <div
      className="border p-4 relative h-52 grid grid-cols-5 grid-rows-2"
      style={{ borderColor: color }}
      key={partyName}
    >
      <div className="col-span-3">
        <p className="text-lg">{politicalPartyInfo.candidate}</p>
        <p className="text-gray-500">{politicalPartyInfo.vicepresident}</p>
      </div>
      <div
        className={`row-span-2 col-span-2 flex ${flexDirection} justify-between items-end`}
      >
        <p className="text-gray-500">{argentinaFormat(votos)} votos</p>
        <p style={{ color: color }} className="text-2xl">
          {porcentaje}%
        </p>
      </div>
      <img
        className="absolute bottom-0 left-0"
        alt={`${politicalPartyInfo.candidate}`}
        src={politicalPartyInfo.photo}
        height="140px"
        width="140px"
      />
    </div>
  );
};

export default BallotageCandidateCard;
