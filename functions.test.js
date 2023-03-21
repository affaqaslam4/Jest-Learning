import functions from "./functions";

// beforeEach(() => {
//   initDatabase();
// });

// afterEach(() => closeDatabase());

beforeAll(() => {
  initDatabase();
});

afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database initialized");
const closeDatabase = () => console.log("Database closed");

describe("Checking name", () => {
  beforeEach(() => {
    nameCheck();
  });

  test("user is jeff", () => {
    expect("Jeff").toBe("Jeff");
  });

  test("user is Karen", () => {
    expect("Karen").toBe("Karen");
  });
});

const nameCheck = () => console.log("Checking name");

//toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not toBe
test("Adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// ToBeNull
test("Should be null", () => {
  expect(functions.returnValue(null)).toBeNull();
});

// Not toBeUndefined
test("Should not be undefined", () => {
  expect(functions.returnValue(null)).not.toBeUndefined();
});

test("Should be falsy", () => {
  expect(functions.returnValue(undefined)).toBeFalsy();
});

test("User should be Affaq Aslam", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Affaq",
    lastName: "Aslam",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Should be under or equal 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in Team", () => {
  expect("Team").not.toMatch(/I/i);
});

test("admin should be in usernames", () => {
  expect(["admin", "user", "owner"]).toContain("admin");
});

// Working with async data
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions
    .fetchUser()
    .then((data) => expect(data.name).toEqual("Leanne Graham"));
});

// Async await
test("Async await User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const user = await functions.fetchUser();
  expect(user.name).toEqual("Leanne Graham");
});
