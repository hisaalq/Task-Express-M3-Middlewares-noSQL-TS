import { model, Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = model("Post", postSchema);

export default Post;