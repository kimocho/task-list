import express from "express";
import requireUser from "#middleware/requireUser";
const tasksRouter = express.Router();

tasksRouter.use(requireUser);

// tasksRouter.get('/', (req, res) => {
//   res.send();
// });




export default tasksRouter;