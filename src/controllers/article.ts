import articleModel from '../models/article';

import {
  Context
} from 'koa'

export const getArticleList = (ctx: Context, next: Function) => {
  ctx.body = "my router";
  next();
}
export const create = async(ctx: Context, next: Function) => {
  try {
    await articleModel.create({
      title: `title - ${Date.now()}`,
      body: `body, ${Math.random()}`
    })
  } catch (e) {
    throw e
  } finally {
    console.log('wow')
  }
  next();
}