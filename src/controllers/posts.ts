import { Context } from "oak"

export default function getPosts(ctx: Context) {

  return ctx.response.body = {
    'message': 'Aprendiendo Deno en Fazt Community!'
  }
}