import { Request, Response } from "express";
import { registerSchema, loginSchema } from "../helpers/userValidation";
import { UsersModel } from "../models/Users";
import { signJWT, verifyJWT } from "../utils/jwt.utils";
import { LogoutModel } from "../models/Logout";
import { logger } from "../utils/logger";
import { formatLoggerResponse } from "../utils/FormatLoggerResponse";
export const sessions: Record<
  string,
  { sessionId: string; email: string; valid: true }
> = {};

const createSession = (email: string, name: string) => {
  // @ts-ignore
  const sessionId = Object.keys(sessions).length + 1;
  const session = { sessionId, email, valid: true, name };
  // @ts-ignore
  sessions[sessionId] = session;
  return session;
};
const user = new UsersModel();
const logoutUser = new LogoutModel()

// Add new user
export const signup = async (req: Request, res: Response) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { business_id, name, email, role, password } = req.body;
    const data = { business_id, name, email, role, password };
    const query = await user.addUser(data);
    return res
      .status(201)
      .json({ message: "New user registered successfully", data: query.name });
  } catch (error: any) {
    return res.json({ message: error });
  }
};

// Signin user
export const signin = async (req: Request, res: Response) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password } = req.body;

    const result = await user.login(email, password);
    const object: any = {
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

      const accessToken = signJWT({ payload: result, sessionId: session },"15 minute");
      const refreshToken = signJWT({ sessionId: session }, "1day");
      await user.saveToken(refreshToken as string);

      //  const accessToken = signJWT({payload:result, sessionId:session.sessionId},'5s' )
      //  const refreshToken = signJWT({sessionId:session.sessionId},'1y' )

      const decodedToken: any = verifyJWT(
        accessToken,
        process.env.TOKEN_SECRET as string
      ).payload;
     

      const date = new Date();
    date.setHours(date.getHours() + 5);

      res.cookie("cookie", refreshToken, {
        maxAge: 3.154e10, // 1 years
        //  httpOnly: true,
        secure:true,
        expires:date,
        // sameSite:'strict',
      })

      if (result.role === "admin") {
        logger.info('Success message', formatLoggerResponse(req, res, {result}))
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
      } else {
        logger.info('Success message', formatLoggerResponse(req, res, {result}))

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
    } else {
      return res.status(400).json({ message: "Invalid login credentials" });
    }
  } catch (error: any) {
    logger.error('Failure message', formatLoggerResponse(req, res, {message: error.response}))
    return res.json({ message: error.message });
  }
};

// Session handler
export const getSession = async (req?: Request, res?: Response) => {
  try {
    // @ts-ignore
    // @ts-ignore
    return res.send(req.user);
  } catch (error) {
    console.log(error);
  }
};


// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await user.getUsers();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch records" });
  }
};

// Get a single user
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await user.getUserById(parseInt(id));
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ message: "Failed to fetch records" });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await user.deleteUser(parseInt(id));
    return res.status(200).json({
      message: `User has been deleted successfully`,
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

// Edit user
export const editUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, role } = req.body;
    const result = await user.editUser(id, name, email, role);
    if (result) {
      return res.status(200).json(result);
    } else {
      return res
        .status(404)
        .json({ message: "No user found for the operation" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all Doctors
export const getDoctors = async (req: Request, res: Response) => {
  try {
    const result = await user.getDoctors();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch records" });
  }
};

export const verifyRefreshToken = async (req: Request, res: Response) => {
  try {
    const {cookie} = req.cookies
    if (!cookie) {
      return res.send("No token");
    }

    const result = user.verifyRefreshToken(cookie);
    if(!result){
      return
    }
    const newAccessToken =  signJWT({ payload: result },"15m")
    return res.json( newAccessToken)
  } catch (error: any) {
    return res.json({ message: error.message });
  }
};

// Logout handler

export const logout = async (req: Request, res: Response) => {
  const {cookie} = req.cookies
  await logoutUser.logout(cookie)

   res.cookie("refreshToken", "", {
     maxAge: 0,
     httpOnly: true,
   });

   return res.send("Logout success");
 
  
  // @ts-ignore
  //  const session = user.invalidateSession(req.user.sessionId)
  //   res.send(session)
  //req.session.destroy();
};
