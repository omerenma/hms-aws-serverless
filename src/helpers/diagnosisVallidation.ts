const joi = require('joi')
export const diagnosisSchema = joi.object(
    {
        treatment_name:joi.string().required(),
        drug_administered: joi.string().required(),
        doctor_name: joi.string().required(),
        patient_email:joi.string().email().exist().required(),
        bill:joi.string().required(),
        paid:joi.string().required(),
        description:joi.string().required(),
        patient_status:joi.string().required(),
        date:joi.string().required()
    }
)

