import articleModel from '../models/article';
import {
  Context
} from 'koa'

export const get = async(ctx: Context, next: Function) => {
  // query
  ctx.body = await articleModel.find({
    title: ctx.query.title
  })
  next();
}
export const create = async(ctx: Context, next: Function) => {
  try {
    const data = await articleModel.create(ctx.request.body)
    ctx.body = {
      data,
      code: 200,
      msg: 'success'
    }
  } catch (e) {
    throw e
  } finally {
    next()
  }
}

export const del = async(ctx: Context, next: Function) => {
  // try {
    // const data = await
  // }
}