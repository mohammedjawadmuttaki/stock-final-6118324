import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: String,
  adress: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Client = mongoose.models.Client || mongoose.model("client", ClientSchema);

export default Client;
