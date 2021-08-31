import {log} from "./deps.js";
import app from "./app.js";

const port = 8004;
log.info(`Server running on PORT: ${port}`);

await app.listen({port})