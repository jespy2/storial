import mongoose from 'mongoose';

const Book = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        notes: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model('books', Book)