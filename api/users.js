import { createUser, getUserByUsernameAndPassword } from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
import express from "express";
const usersRouter = express.Router();

usersRouter.route('/register').post(requireBody(["username", "password"]), async (req, res) => {
  const { username, password } = req.body;
  const user = await createUser(username, password);
  const token = createToken({ id: user.id });
  res.status(201).send(token);
});

usersRouter.route('/login').post(requireBody(["username", "password"]), async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsernameAndPassword(username, password);
  if (!user) return res.status(401).send('invalid username or password');
  const token = createToken({ id: user.id });
  res.send(token);
});

export default usersRouter;