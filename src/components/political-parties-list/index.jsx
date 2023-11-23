import React from "react";

const PoliticalPartiesList = ({ agrupaciones }) => {
  const gallery = Object.values(
    import.meta.glob("../../assets/partidos/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  return (
    <>
      <h2 className="my-4 text-2xl border-t pt-4 border-gray-600">
        Agrupaciones
      </h2>
      {agrupaciones.map((data) => {
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
    </>
  );
};

export default PoliticalPartiesList;
