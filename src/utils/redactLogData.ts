import { SensitiveKeys } from "./enum";

 const sensitiveKeysList = Object.values(SensitiveKeys) as string[]
export const redactLogData = (data: any) : any => {
    if(typeof data === 'object' && data !== null && !data.constructor.name.startsWith('model')) {
        if(Array.isArray(data)) {
            return data.map(item => redactLogData(item))
        }
        const redactedData: any = {}
        for(const key in data) {
            if(sensitiveKeysList.includes(key)){
                redactedData[key] = '*******' // replace e.g password with *
            }else{
                // Recursively redact sensitive keys within nexted objects
                redactedData[key] = redactLogData(data[key])
            }
        }
        return redactedData
    }  else {
        return data
    }
}  
