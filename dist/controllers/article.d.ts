/// <reference types="koa" />
/// <reference types="koa-router" />
import { Context } from 'koa';
export declare const get: (ctx: Context, next: Function) => Promise<void>;
export declare const create: (ctx: Context, next: Function) => Promise<void>;
export declare const del: (ctx: Context, next: Function) => Promise<void>;
