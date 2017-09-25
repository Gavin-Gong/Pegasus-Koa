"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// define Schema
const articleSchema = new mongoose.Schema({
    title: String,
    created_at: { type: Date, default: Date.now() },
    body: String
});
// define Methods
articleSchema.methods.getArticle = () => {
    console.log(this);
};
// define Model
const Article = mongoose.model("articles", articleSchema);
exports.default = Article;
//# sourceMappingURL=article.js.map