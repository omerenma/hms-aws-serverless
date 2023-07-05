"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        dialect: process.env.DIALECT,
        dialectOptions: {
            bigNumberStrings: true,
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUVmLGtCQUFlO0lBQ1gsV0FBVyxFQUFFO1FBQ1QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1FBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDakMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUN6QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ3pCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7UUFDL0IsY0FBYyxFQUFFO1lBQ1osZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1FBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDakMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUN6QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ3pCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7S0FDbEM7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ2xDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztRQUNqQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQzlCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUM1QixjQUFjLEVBQUU7WUFDWixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpXHJcbmRvdGVudi5jb25maWcoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFLFxyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCxcclxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxyXG4gICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGJpZ051bWJlclN0cmluZ3M6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRCX0RJQUxFQ1QsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGlvbjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5SRFNfVVNFUk5BTUUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlJEU19QQVNTV09SRCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUkRTX0RCX05BTUUsXHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUkRTX0hPU1ROQU1FLFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LlJEU19QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRJQUxFQ1QsXHJcbiAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgYmlnTnVtYmVyU3RyaW5nczogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07Il19