"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = require("../models/article");
exports.get = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    // query
    ctx.body = yield article_1.default.find({
        title: ctx.query.title
    });
    next();
});
exports.create = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const data = yield article_1.default.create(ctx.request.body);
        ctx.body = {
            data,
            code: 200,
            msg: 'success'
        };
    }
    catch (e) {
        throw e;
    }
    finally {
        next();
    }
});
exports.del = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    // try {
    // const data = await
    // }
});
//# sourceMappingURL=article.js.map