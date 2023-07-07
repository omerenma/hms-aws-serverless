
const joi = require('joi')
export const admissionSchema = joi.object(
    {
        patients_id:joi.string().required(),
        admission_date:joi.string().required(),
        admission_room_number:joi.string().required(),
        ailment:joi.string().required()
    }
)
