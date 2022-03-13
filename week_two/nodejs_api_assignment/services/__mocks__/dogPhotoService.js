const dogPhotoService = (imgQuantity) => {
  console.log("Mocked Dog Photos by Image Quantity");
  return Promise.resolve({
    message: 5,
    completed: true,
  });
};

module.exports = { dogPhotoService };
