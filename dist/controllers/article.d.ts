/// <reference types="koa" />
/// <reference types="koa-router" />
import { Context } from 'koa';
export declare const getArticleList: (ctx: Context, next: Function) => void;
export declare const create: (ctx: Context, next: Function) => Promise<void>;
