const joi = require('joi')
export const doctorRemarkSchema = joi.object(
    {
        name:joi.string().required(),
        email: joi.string().required(),
        phone_no:joi.string().required(),
        message:joi.string().required(),
        doctor_id:joi.string().required()
    }
)
