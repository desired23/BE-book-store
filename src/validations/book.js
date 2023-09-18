import joi  from "joi";

export const bookSchema = joi.object({
    title: joi.string().required().min(3).max(255),
    description: joi.string().required().min(3).max(255),
    author: joi.string().required().min(3).max(255),
    categoryId: joi.array().items(joi.string()).required(),
    images: joi.array().items(joi.string()),
    price:joi.number().min(1).required(),
    stock:joi.number().min(0).required(),
    rating: joi.array().items(joi.number()).required()
})