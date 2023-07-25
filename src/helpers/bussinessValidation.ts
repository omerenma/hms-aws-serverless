const joi = require('joi')
export const bussinessSchema = joi.object(
    {
        address:joi.string().required(),
        name:joi.string().required(),
        phone:joi.string().required(),
         email: joi.string().email().exist().required(),
        password: joi.string().required().min(8),
        role:joi.string().required()
    }
)

