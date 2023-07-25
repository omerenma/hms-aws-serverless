const joi = require('joi')
export const bussinessSchema = joi.object(
    {
        first_name:joi.string().required(),
        last_name:joi.string().required(),
        phone:joi.string().required(),
        // email: joi.string().email().exist().required(),
        password: joi.string().required().min(8),
        role:joi.string().required()
    }
)

