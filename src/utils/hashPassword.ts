const bcrypt = require('bcryptjs')

const hashPassword = async(password:string, salt:number) => {
return await bcrypt.hash(password, salt)
}
export default hashPassword