import argentinaFormat from "../../utils/argentinaFormat";

const PoliticalPartyCard = ({ color, nombre, votos, porcentaje }) => {
  const gallery = Object.values(
    import.meta.glob("../../assets/partidos/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  return (
    <div
      className="border border-gray-600 rounded-sm p-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2"
      style={{ borderColor: color }}
      key={nombre}
    >
      <img
        src={gallery.find((image) => {
          var imageRegex = new RegExp(`${nombre}`, "g");
          return imageRegex.test(image);
        })}
        height="30px"
        width="30px"
        className="w-10 rounded-sm"
      />
      <div className="self-center" style={{ color: color }}>
        {nombre}
      </div>
      <div className="col-start-2 flex justify-between ">
        <p className="text-gray-500">{argentinaFormat(votos)} Votos</p>
        <p className="font-semibold">{porcentaje}%</p>
      </div>
    </div>
  );
};

export default PoliticalPartyCard;
