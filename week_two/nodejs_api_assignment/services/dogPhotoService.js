const axios = require("axios");

const dogPhotoService = (imgQuantity) => {
  console.log("Random dog photo by quantity");
  return axios
    .get(`${process.env.randomDogPhotoByQuantityURL}${imgQuantity}`)
    .then((result) => {
      return result.data;
    });
};

const dogPhotoServiceAllBreeds = () => {
  console.log("List of all dogs by breed");
  return axios.get(`${process.env.allDogBreedsDataURL}`).then((result) => {
    return result.data;
  });
};

const dogPhotoServiceByBreedByQuantity = (breedType, imgQuantity) => {
  console.log("List of dogs by breed type by image quantity requested");
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
