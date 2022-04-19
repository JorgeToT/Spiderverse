const Spiderman = require("../app/spiderman");
describe("Unit Test for Spiderman Class", function () {
  test("1) Create an spiderman object", () => {
    const andrewGarfield = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );

    expect(andrewGarfield.name).toBe("Spiderman Marvel");
    expect(andrewGarfield.age).toBe(25);
    expect(andrewGarfield.actor).toBe("Tom Holland");
    expect(andrewGarfield.movies).toBe(5);
    expect(andrewGarfield.studio).toBe("Marvel");
  });
  test("2) Use method getInfo()", () => {
    const tomHolland = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel");
  });
});
