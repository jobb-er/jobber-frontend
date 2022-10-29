import addAsterisk from "./addAsterisk";

it("addAsterisk add asterisk to string properly", () => {
  expect(addAsterisk("Required")).toStrictEqual("Required*");
});
