import {Application, log, send} from "./deps.js";

const app = new Application();

// routing

// serve index.html in the static folder if not much routing
app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;

  // filter path to only accept "/"
  if(filePath === "/") {

    log.info('Served index.html successfuly');

    const indexPagePath = `${filePath}index.html`
    await send(ctx, indexPagePath, {
      root: `${Deno.cwd()}/static`
    })
  }
})

export default app;