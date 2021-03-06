import nc from "next-connect";
import { all } from "@/middlewares/index";
import passport from "middlewares/passport";

const handler = nc();

handler.use(all);

handler.post(passport.authenticate("local"), (req, res) => {
  res.json({ user: req.user });
});

export default handler;
