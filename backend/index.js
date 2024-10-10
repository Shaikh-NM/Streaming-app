import express from "express";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import searchRoutes from "./routes/search.route.js";
import tvRoutes from "./routes/tv.route.js";
import { ENV_VARS } from "./config/envVars.js";
import connectDB from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";
import cookieParser from "cookie-parser";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const { PORT } = ENV_VARS;
app.listen(PORT, async () => {
  console.log(`Server started on http://localhost:${PORT}/`);
  await connectDB();
});
