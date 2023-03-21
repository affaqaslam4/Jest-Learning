import { isAnagram } from "./isAnagram";

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is an angaram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBe(true);
});

test("cinema is not an angaram of spiderman", () => {
  expect(isAnagram("cinema", "spiderman")).toBe(false);
});
