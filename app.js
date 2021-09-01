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

  // regex to find .js .css in filePath
  let reg = /.css|.js$/;
  const result = filePath.match(reg);

  if(result) {

    // send js css file
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/static`
    })
  } else {

    // send index.js
    await send(ctx, "/index.html", {
    root: `${Deno.cwd()}/static`
    })
  }
})

export default app;