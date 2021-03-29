var RajaOngkir = require('rajaongkir-nodejs').Starter('9501c2041bd7d8e4f7eff63ff47efa28');


module.exports = async (path) => {
  const data = await RajaOngkir.getProvinces()
  await strapi.query('hit').create({
    date: new Date(),
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};