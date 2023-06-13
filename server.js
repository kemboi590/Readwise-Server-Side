import express from "express";

import config from "./db/config.js";
import blogs from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

blogs(app);

app.listen(config.port, () => {
  console.log(`Server running at ${config.url}`);
});
