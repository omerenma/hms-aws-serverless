"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.verifyRefreshToken = exports.getDoctors = exports.editUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.getSession = exports.signin = exports.signup = exports.sessions = void 0;
const userValidation_1 = require("../helpers/userValidation");
const Users_1 = require("../models/Users");
const jwt_utils_1 = require("../utils/jwt.utils");
const Logout_1 = require("../models/Logout");
exports.sessions = {};
const createSession = (email, name) => {
    // @ts-ignore
    const sessionId = Object.keys(exports.sessions).length + 1;
    const session = { sessionId, email, valid: true, name };
    // @ts-ignore
    exports.sessions[sessionId] = session;
    return session;
};
const user = new Users_1.UsersModel();
const logoutUser = new Logout_1.LogoutModel();
// Add new user
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = userValidation_1.registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { business_id, name, email, role, password } = req.body;
        const data = { business_id, name, email, role, password };
        const query = yield user.addUser(data);
        return res
            .status(201)
            .json({ message: "New user registered successfully", data: query.name });
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.signup = signup;
// Signin user
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = userValidation_1.loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { email, password } = req.body;
        const result = yield user.login(email, password);
        const object = {
            email: result.email,
            name: result.name,
        };
        if (result) {
            let sessions = {};
            // create session for logged in user
            // const session =  createSession(object.email, object.name)
            const session = req.session;
            // @ts-ignore
            session.userId = object.email;
            // @ts-ignore
            const accessToken = (0, jwt_utils_1.signJWT)({ payload: result, sessionId: session }, "15m");
            const refreshToken = (0, jwt_utils_1.signJWT)({ sessionId: session }, "1day");
            yield user.saveToken(refreshToken);
            //  const accessToken = signJWT({payload:result, sessionId:session.sessionId},'5s' )
            //  const refreshToken = signJWT({sessionId:session.sessionId},'1y' )
            const decodedToken = (0, jwt_utils_1.verifyJWT)(accessToken, process.env.TOKEN_SECRET).payload;
            const date = new Date();
            date.setHours(date.getHours() + 5);
            res.cookie("cookie", refreshToken, {
                maxAge: 3.154e10,
                //  httpOnly: true,
                secure: true,
                expires: date,
                // sameSite:'strict',
            });
            if (result.role === "admin") {
                return res.status(200).json({
                    message: "Login successful",
                    accessToken: accessToken,
                    name: decodedToken["payload"]["name"],
                    email: decodedToken["payload"]["email"],
                    role: decodedToken["payload"]["role"],
                    id: decodedToken["payload"]["id"],
                    business_id: decodedToken["payload"]["business_id"],
                    session: session,
                });
            }
            else {
                return res.status(200).json({
                    message: "Login successful",
                    accessToken: accessToken,
                    name: decodedToken["payload"]["name"],
                    email: decodedToken["payload"]["email"],
                    role: decodedToken["payload"]["role"],
                    id: decodedToken["payload"]["id"],
                    business_id: decodedToken["payload"]["business_id"],
                    session: session,
                });
            }
        }
        else {
            return res.status(400).json({ message: "Invalid login credentials" });
        }
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.signin = signin;
// Session handler
const getSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        // @ts-ignore
        return res.send(req.user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getSession = getSession;
// Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.getUsers();
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getUsers = getUsers;
// Get a single user
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.getUserById(parseInt(id));
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getUserById = getUserById;
// Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.deleteUser(parseInt(id));
        return res.status(200).json({
            message: `User has been deleted successfully`,
            data: result,
        });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});
exports.deleteUser = deleteUser;
// Edit user
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, email, role } = req.body;
        const result = yield user.editUser(id, name, email, role);
        if (result) {
            return res.status(200).json(result);
        }
        else {
            return res
                .status(404)
                .json({ message: "No user found for the operation" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.editUser = editUser;
// Get all Doctors
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.getDoctors();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getDoctors = getDoctors;
const verifyRefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cookie } = req.cookies;
        if (!cookie) {
            return res.send("No token");
        }
        const result = user.verifyRefreshToken(cookie);
        if (!result) {
            return;
        }
        const newAccessToken = (0, jwt_utils_1.signJWT)({ payload: result }, "15m");
        return res.json(newAccessToken);
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.verifyRefreshToken = verifyRefreshToken;
// Logout handler
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cookie } = req.cookies;
    yield logoutUser.logout(cookie);
    res.cookie("refreshToken", "", {
        maxAge: 0,
        httpOnly: true,
    });
    return res.send("Logout success");
    // @ts-ignore
    //  const session = user.invalidateSession(req.user.sessionId)
    //   res.send(session)
    //req.session.destroy();
});
exports.logout = logout;
