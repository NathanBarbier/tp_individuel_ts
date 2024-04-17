import filmRoutes from "./routes/filmRoutes";
import directorRoutes from "./routes/directorRoutes";
import sessionRoutes from "./routes/sessionRoutes";
import express from "express";

const mongoose = require('mongoose');
const uri = "mongodb+srv://nbarbier001:FKRjgGg4spBMNdQV@cluster0.zfsplxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log(error)
    await mongoose.disconnect();
  }
}
run().catch(console.dir);



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/director", directorRoutes);
app.use("/api/film", filmRoutes);
app.use("/api/session", sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
