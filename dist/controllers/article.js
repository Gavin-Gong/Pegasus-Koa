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
exports.getArticleList = (ctx, next) => {
    ctx.body = "my router";
    next();
};
exports.create = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield article_1.default.create({
            title: `title - ${Date.now()}`,
            body: `body, ${Math.random()}`
        });
        ctx.body = 'wow';
        next();
    }
    catch (e) {
        throw e;
    }
    finally {
        console.log(ctx.request.body);
    }
});
//# sourceMappingURL=article.js.map