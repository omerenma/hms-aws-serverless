const joi = require('joi')
export const enquirySchema = joi.object(
    {
        name:joi.string().required(),
        email: joi.string().required(),
        message:joi.string().required()
    }
)
