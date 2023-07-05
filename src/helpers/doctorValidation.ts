const joi = require('joi')
export const createDocotrSchema = joi.object(
    {
        //name:joi.string().required(),
        email: joi.string().email().exist().required(),
        sex: joi.string().required(),
        dob:joi.string().required(),
        phone_no:joi.string().required(),
        specialty:joi.string().required(),
        //id_doctor:joi.string().required()
    }
)
