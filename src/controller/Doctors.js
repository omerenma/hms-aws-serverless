"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.deleteUser = exports.getDocotrById = exports.getDoctors = exports.createDoctor = void 0;
const doctorValidation_1 = require("../helpers/doctorValidation");
const Doctors_1 = require("../models/Doctors");
const user = new Doctors_1.DoctorModel();
// Add doctor
const createDoctor = async (req, res) => {
    try {
        const { error, value } = doctorValidation_1.createDocotrSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, email, sex, dob, phone_no, specialty } = req.body;
        const data = { name, email, sex, dob, phone_no, specialty };
        await user.addDoctor(data);
        return res.status(201).json({ message: "Doctor registered successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createDoctor = createDoctor;
// Get all doctors
const getDoctors = async (req, res) => {
    try {
        const result = await user.getdoctors();
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
};
exports.getDoctors = getDoctors;
// Get a single user
const getDocotrById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await user.getUserById(parseInt(id));
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
};
exports.getDocotrById = getDocotrById;
// Delete doctor
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await user.deleteDoctor(id);
        return res.status(200).json({
            message: `User has been deleted successfully`,
            data: result,
        });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
};
exports.deleteUser = deleteUser;
// Edit user
const editUser = async (req, res) => {
    try {
        const { id, name, email, sex, dob, phone_no, specialty } = req.body;
        const result = await user.editDoctor(id, name, email, sex, dob, phone_no, specialty);
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
};
exports.editUser = editUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0VBQW1FO0FBQ25FLCtDQUFnRDtBQUVoRCxNQUFNLElBQUksR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztBQUMvQixhQUFhO0FBQ04sTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNoRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxxQ0FBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDcEU7UUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2hFLE1BQU0sSUFBSSxHQUFHLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUM1RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBQyxDQUFDLENBQUM7S0FDNUU7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxP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QUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQztBQWRXLFFBQUEsUUFBUSxZQWNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlRG9jb3RyU2NoZW1hLCAgfSBmcm9tIFwiLi4vaGVscGVycy9kb2N0b3JWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IERvY3Rvck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Eb2N0b3JzXCI7XHJcblxyXG5jb25zdCB1c2VyID0gbmV3IERvY3Rvck1vZGVsKCk7XHJcbi8vIEFkZCBkb2N0b3JcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvY3RvciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IGNyZWF0ZURvY290clNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgc2V4LCBkb2IsIHBob25lX25vLCBzcGVjaWFsdHkgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZGF0YSA9IHsgIG5hbWUsIGVtYWlsLCBzZXgsIGRvYiwgcGhvbmVfbm8sIHNwZWNpYWx0eSB9O1xyXG4gICAgIGF3YWl0IHVzZXIuYWRkRG9jdG9yKGRhdGEpXHJcbiAgXHJcbiAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJEb2N0b3IgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcIn0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBHZXQgYWxsIGRvY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldERvY3RvcnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXIuZ2V0ZG9jdG9ycygpO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHJlY29yZHNcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBHZXQgYSBzaW5nbGUgdXNlclxyXG5leHBvcnQgY29uc3QgZ2V0RG9jb3RyQnlJZCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXIuZ2V0VXNlckJ5SWQocGFyc2VJbnQoaWQpKTtcclxuICAgIHJldHVybiByZXMuanNvbihyZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHJlY29yZHNcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBEZWxldGUgZG9jdG9yXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlci5kZWxldGVEb2N0b3IoaWQpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogYFVzZXIgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHlgLFxyXG4gICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gRWRpdCB1c2VyXHJcbmV4cG9ydCBjb25zdCBlZGl0VXNlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHNleCwgZG9iLCBwaG9uZV9ubywgc3BlY2lhbHR5IH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXIuZWRpdERvY3RvcihpZCwgbmFtZSwgZW1haWwsIHNleCwgZG9iLCBwaG9uZV9ubywgc3BlY2lhbHR5KTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwNClcclxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIk5vIHVzZXIgZm91bmQgZm9yIHRoZSBvcGVyYXRpb25cIiB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4iXX0=