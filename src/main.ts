import { Application } from "oak";
import postsRouter from "./routes/posts.ts";

const app = new Application()

app.use(postsRouter.routes())

app.use((ctx) => {
  const url = ctx.request.url;
  console.log(url);

  ctx.response.status = 404
  return ctx.response.body = 'Not found';
})


await app.listen({ port: 3000 })