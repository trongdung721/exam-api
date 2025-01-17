import express from "express";
import mongoose from "mongoose";
import { foodsRoutes } from "./routes/foodsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";
import job from "./utils/cron.js";

const app = express();
app.use(express.json({ limit: "200mb" }));
app.use("/api/foods", foodsRoutes);
app.use("/api/users", usersRoutes);
job.start();

mongoose
    .connect("mongodb+srv://trongdung0607:<trongdung0607>@cluster0.gjar3rp.mongodb.net/", {
        dbName: "Cluster0",
    })
    .then(() => {
        console.log("Successfully connect to DB");
        app.listen(4000, () => console.log("Listening at 4000"));
    })
    .catch((err) => console.log(err));