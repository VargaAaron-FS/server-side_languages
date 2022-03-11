const { dogPhotoService } = require("./dogPhotoService");

// jest.mock("./dogPhotoService.js");

describe("Dog Photo Service Tests", () => {
  test("Should return random dog photo by specified quantity", async () => {
    const result = await dogPhotoService(5);
    expect(result.message).toHaveLength(5);
  });
});
