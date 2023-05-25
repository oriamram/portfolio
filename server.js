import express from "express";
import { Path } from "three";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
	res.sendFile(Path.join(__dirname, "dist", "index.html"));
});

const port = 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
