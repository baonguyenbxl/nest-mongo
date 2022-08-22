import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema( {
    title: { type: String, required: true, uppercase: true, trim: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    is_completed: Boolean,
    pictures: [ String ],
    createdAt: { type: Date, default: Date.now() }
} );
