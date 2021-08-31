import {Application, log, send} from "./deps.js";
import router from "./routes/router.js";

const app = new Application();

// logging request
app.use(async (ctx, next) => {
  await next();
  log.info(`${ctx.request.method}: ${ctx.request.url}`);
})

// routing
app.use(router.routes());
app.use(router.allowedMethods());

// serve index.html in the static folder
app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;

  // filter path to only accept "/"
  if(filePath === "/") {

    log.info('Served index.html successfully');

    const indexPagePath = `${filePath}index.html`
    await send(ctx, indexPagePath, {
      root: `${Deno.cwd()}/static`
    })
  }
})

export default app;