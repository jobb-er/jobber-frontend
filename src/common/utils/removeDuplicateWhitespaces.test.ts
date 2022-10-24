import removeDuplicateWhitespaces from "./removeDuplicateWhitespaces";

it("removeDuplicateWhitespaces remove duplicated whitespaces properly", () => {
  expect(
    removeDuplicateWhitespaces("test test    test   test        test"),
  ).toStrictEqual("test test test test test");
});

it("removeDuplicateWhitespaces not remove single whitespaces", () => {
  expect(removeDuplicateWhitespaces("test test test")).toStrictEqual(
    "test test test",
  );
});
