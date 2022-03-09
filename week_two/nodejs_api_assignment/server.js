const express = require("express");
const {
  dogPhotoService,
  dogPhotoServiceAllBreeds,
  dogPhotoServiceByBreedByQuantity,
  dogPhotoServiceByBreedAll,
} = require("./services/dogPhotoService");
require("dotenv").config();

const app = express();

// for localhost:3000/
app.get("/", (req, res, next) => {
  res.status(200).send("Service is UP!");
});

// get external service by listing all dog breeds data for reference in potential future requests
// http://localhost:3000/all
app.get("/all", (req, res, next) => {
  dogPhotoServiceAllBreeds()
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res.status(err.status || 501).json({
        error: {
          message: err.message,
          status: err.status,
          method: req.method,
        },
      })
    );
});

// get external service by quantity of wanted random dog photos
// http://localhost:3000/3
app.get("/:imgQuantity", (req, res, next) => {
  const imgQuantity = req.params.imgQuantity;
  dogPhotoService(imgQuantity)
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res
        .status(501)
        .json({ error: { message: err.message, status: err.status } })
    );
});

// get external service by quantity of wanted breed specified dog photos
// http://localhost:3000/hound/3
app.get("/:breedType/:imgQuantity", (req, res, next) => {
  const breedType = req.params.breedType;
  const imgQuantity = req.params.imgQuantity;
  dogPhotoServiceByBreedByQuantity(breedType, imgQuantity)
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res
        .status(501)
        .json({ error: { message: err.message, status: err.status } })
    );
});

// get external service by all random dog photos by specified breed type requested
// http://localhost:3000/hound
app.get("/:breedType", (req, res, next) => {
  const breedType = req.params.breedType;
  dogPhotoServiceByBreedAll(breedType)
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res
        .status(501)
        .json({ error: { message: err.message, status: err.status } })
    );
});

// middleware modules for error handling (put in all code!)
app.use((req, res, next) => {
  const error = new Error("NOT FOUND!");
  error.status = 404;
  next(error);
});

// middleware to send error nicely
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

app.listen(process.env.port, () => {
  console.log(`Server starting on port ${process.env.port}`);
});
