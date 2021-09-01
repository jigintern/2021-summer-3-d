import {Application, log, send} from "./deps.js";
import router from "./routes/router.js";

const app = new Application();

// logging request
app.use(async (ctx, next) => {
  log.info(`${ctx.request.method}: ${ctx.request.url}`);
  await next();
})

// routing
app.use(router.routes());
app.use(router.allowedMethods());

// serve index.html
router.get('/', async (ctx, next) => {
  await send(ctx, "/index.html", {
  root: `${Deno.cwd()}/static`
  })
  log.info("Serve index.html successfully");
})

// serve other files in the static folder
app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;

  await send(ctx, filePath, {
    root: `${Deno.cwd()}/static`
  })
})

export default app;