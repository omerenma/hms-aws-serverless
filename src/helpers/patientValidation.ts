const joi = require('joi')
export const patientSchema = joi.object(
    {
        name:joi.string().required(),
        sex:joi.string().required(),
        dob:joi.string().required(),
        email:joi.string().required().email(),
        residential_address: joi.string().required(),
        phone_no:joi.string().required(),
        next_of_kin_name:joi.string().required(),
        next_of_kin_phone:joi.string().required(),
    }
)

