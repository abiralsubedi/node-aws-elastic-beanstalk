import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import checkRoutes from "./routes/check";

config();
const app = express();
app.use(bodyParser.json());

const { PORT = 5000} = process.env;

app.get("/health", (req: Request, res: Response) =>
  res.json({ status: "Health ok" })
);

app.use("/check", checkRoutes);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log("listening... in ", PORT );
});
