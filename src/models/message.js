import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model("Message", messageSchema)
