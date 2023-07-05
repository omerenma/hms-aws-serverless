import { Users, LoginData } from '../utils/types';
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export declare class UsersModel {
    addUser(user: Users): Promise<Users>;
    login(email: string, password: string): Promise<LoginData>;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<Users[]>;
    deleteUser(id: number): Promise<Users>;
    editUser(id: string, name?: string, email?: string, role?: string): Promise<[]>;
    getDoctors(): Promise<Users[]>;
}
export {};
