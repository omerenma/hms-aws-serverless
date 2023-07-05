
const joi = require('joi')
export const admissionSchema = joi.object(
    {
        admission_date:joi.string().required(),
        discharged_date:joi.string().required(),
        patients_id:joi.string().required()
    }
)
