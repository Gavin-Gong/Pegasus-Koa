"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// define Schema
const articleSchema = new mongoose.Schema({
    title: String,
    body: String,
    background: {
        default: '',
        type: String
    },
    created_at: { type: Date, default: Date.now() },
    update_at: { type: Date, default: Date.now() },
    author: {},
    comments: {
        type: Array,
        default: []
    },
});
// define Model
const Article = mongoose.model("articles", articleSchema);
exports.default = Article;
//# sourceMappingURL=article.js.map