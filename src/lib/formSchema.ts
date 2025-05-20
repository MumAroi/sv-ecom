import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(3),
    category: z.number().positive(),
    subCategory: z.string().min(1),
    price: z.number().positive(),
    stock: z.number().nonnegative(),
    images: z
        .instanceof(File, { message: 'Please upload an image' })
        .refine((f) => f.size < 500_00, 'Image size must be less than 5MB')
        .array(),
});

export const categorySchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    subcategories: z.string().array().min(1),
});
