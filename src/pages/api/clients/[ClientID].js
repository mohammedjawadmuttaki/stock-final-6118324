import Client from "../../../models/Client";
import dbConnect from "../../../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { ClientID } = req.query;
  switch (method) {
    case "PUT":
      try {
        const { name, address } = req.body;
        if (!name && !address) return "inavalid data";
        await Client.updateOne({ _id: ClientID }, { name, address });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Client.deleteOne({ _id: ClientID });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
