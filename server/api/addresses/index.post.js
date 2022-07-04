import Address from '~~/server/models/Address';
import Coordinates from '~~/server/models/Coordinate';

export default defineEventHandler(async (event) => {
  const { street, country, city, zipCode } = await useBody(event);

  try {
    const coordinatesJson = $fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyA-xeZY8mvozEc9HQ7_s7qh1M8dYw8uOgA`
    );

    const coordinates = await Coordinates.create({
      lat: coordinatesJson.lat,
      lng: coordinatesJson.lng
    });

    const address = await Address.create({
      street,
      country,
      city,
      zipCode,
      coordinates
    });

    return address;
  } catch (err) {
    console.log(err);

    return { error: err.message };
  }
});
