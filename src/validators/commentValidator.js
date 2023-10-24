import Joi from "joi";

const commentValidator = Joi.object({
    postId:Joi.number().min(1).required(),
    name:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters, from 1 to 20 characters!'
    }),
    email:Joi.string().pattern(/^[A-Za-z0-9][A-Za-z0-9._-]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/).required().messages({
        'string.pattern.base': 'E-mail entered incorrectly!'
    }),
    body:Joi.string().min(10).max(100).required()
})

export {commentValidator};