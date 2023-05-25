import express from "express";
import { Path } from "three";

const app = express();

app.use(express.static("dist"));
const port = process.env.PORT || 4000;

app.get("*", (req, res) => {
	res.sendFile(Path.join(__dirname, "dist", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
	console.log(`Server is running on port ${port}`);
});
