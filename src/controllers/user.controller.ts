import { Request, Response } from "express";
import { User } from "../models/user.model";

interface UserProps {
    name: string;
    email: string;
    password: string;
    profileImg: string;
    dateOfBirth: Date;
    contactNumber: string;
    address: string;
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, profileImg, dateOfBirth, contactNumber, address }: UserProps = req.body;
    try {
        const result = await User.create({
            name, email, password, profileImg, dateOfBirth, contactNumber, address
        });
        console.log("User Created Successfully", result);
        res.json(result);
    } catch (error) {
        console.log("Error while creating user", error);
    }
}

export const updateUser = async (req: Request, res: Response) => {}

export const deleteUser = async (req: Request, res: Response) => {}

export const getUser = async (req: Request, res: Response) => {}

export const getUsers = async (req: Request, res: Response) => {}