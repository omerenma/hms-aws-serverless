const joi = require('joi')
export const appointmentSchema = joi.object(
    {
        patient_name:joi.string().required().min(6),
        doctor_email: joi.string().email().exist().required(),
        patient_email: joi.string().email().exist().required(),
        date:joi.string().required()
    }
)

