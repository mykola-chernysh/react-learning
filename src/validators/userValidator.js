import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters, from 1 to 20 characters!'
    }),
    username:Joi.string().required(),
    email:Joi.string().pattern(/^[A-Za-z0-9][A-Za-z0-9._-]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/).required().messages({
        'string.pattern.base': 'E-mail entered incorrectly!'
    }),
})

export {userValidator};