const { Schema, model, Types } = require('mongoose');

// sets the user schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email address"],
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: "Thought",
        },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: "User",
        },
    ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);
module.exports = User;