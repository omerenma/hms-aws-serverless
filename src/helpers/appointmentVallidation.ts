const joi = require('joi')
export const appointmentSchema = joi.object(
    {
        patient_id:joi.string().required(),
        doctor_id: joi.string().required(),
        appointment_date:joi.string().required()
    }
)

