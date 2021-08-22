import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@ex.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johm@ex.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@ex.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default Users;
