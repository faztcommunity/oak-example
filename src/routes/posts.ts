import { Router, Context } from 'oak';
import getPosts from '../controllers/posts.ts';

const postsRouter = new Router()

postsRouter.get('/posts', (ctx: Context) => getPosts(ctx))

postsRouter.get('/', (ctx) => {
  return ctx.response.body = {
    status: 'Ok',
    gretting: 'Hola Deno 🦖'
  }
})

export default postsRouter