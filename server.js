import {log} from "./deps.js";
import app from "./app.js";

const port = 8893;
log.info(`Server running on PORT: ${port}`);

await app.listen({port})