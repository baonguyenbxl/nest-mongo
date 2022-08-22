import { Document } from 'mongoose';
export interface Item extends Document
{
    title: string;
    author: string;
    description: string;
    is_completed: boolean;
    pictures?: Array<string>;
    createdAt: Date;
}
