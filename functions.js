import axios from "axios";

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  returnValue: (val) => val,
  createUser: () => {
    const user = {
      firstName: "Affaq",
    };
    user["lastName"] = "Aslam";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error fetching user"),
};

export default functions;
