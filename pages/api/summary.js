export default function summaryRoute(req, res) {
  if (req.method === "GET") {
    //check authentication
    const user = checkToken(req);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ ok: false, message: "Permission denied" });
    }
    readUsersDB();
    let adCount = 0;
    let userCount = 0;
    if (user.isAdmin) {
      adCount += 1;
    } else if (!user.isAdmin) {
      userCount += 1;
    }
    //compute DB summary
    //return response
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
