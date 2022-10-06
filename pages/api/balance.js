import { checkToken } from "../../backendLibs/checkToken";
import { readUsersDB, writeUsersDB } from "../../backendLibs/dbLib";

export default function balanceRoute(req, res) {
  if (req.method === "GET") {
    //check authentication
    const user = checkToken(req);
    if (!user || user.isAdmin) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission to check balance",
      });
    }

    const users = readUsersDB();
    //find user in DB and get their money value
    const foundUser = users.find((x) => x.username === username);
    if (foundUser) return res.json({ ok: true, money: money });

    //return response
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
