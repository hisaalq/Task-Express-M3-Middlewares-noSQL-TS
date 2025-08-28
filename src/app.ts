import express from "express";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import path from "path";
import { notFound } from "./middlewares/notFound.middleware";
import { errorHandler } from "./middlewares/errorhandler.middleware";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use("/media", express.static(path.join(__dirname, "../media")));
app.use("/posts", postsRoutes);
app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});