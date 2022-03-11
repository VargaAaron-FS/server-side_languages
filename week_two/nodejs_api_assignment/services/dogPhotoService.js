const axios = require("axios");
require("dotenv").config();

const dogPhotoService = (imgQuantity) => {
  console.log("Real Random dog photo by quantity");
  return axios
    .get(`${process.env.randomDogPhotoByQuantityURL}${imgQuantity}`)
    .then((result) => {
      return result.data;
    });
};

const dogPhotoServiceAllBreeds = () => {
  console.log("Real List of all dogs by breed");
  return axios.get(`${process.env.allDogBreedsDataURL}`).then((result) => {
    return result.data;
  });
};

const dogPhotoServiceByBreedByQuantity = (breedType, imgQuantity) => {
  console.log("Real List of dogs by breed type by image quantity requested");
  return axios
    .get(
      `${process.env.randomDogPhotoByBreedURL}${breedType}/images/random/${imgQuantity}`
    )
    .then((result) => {
      return result.data;
    });
};

module.exports = {
  dogPhotoService,
  dogPhotoServiceAllBreeds,
  dogPhotoServiceByBreedByQuantity,
};
