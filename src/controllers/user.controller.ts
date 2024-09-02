import { Request, Response } from "express";
import { User } from "../models/user.model";
import { ApiResponse } from "../utils/ApiResponse";
import brcypt from "bcryptjs";

interface UserProps {
    name: string;
    email: string;
    password: string;
    profileImg: string;
    dob: Date;
    contactNumber: string;
    address: string;
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, profileImg, dob, contactNumber, address }: UserProps = req.body;

    if(!name || !email || !password || !dob) {
        return res.status(400).json(ApiResponse.error(400, null, "Please provide all the required fields"));
    }

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
        return res.status(400).json(ApiResponse.error(400, null, "User already exists with this email"));
    }

    const birthData = new Date(dob); 

    try {

        const hashedPassword =  await brcypt.hash(password, 10);
        const result = await User.create({
            name, email, password:hashedPassword, profileImg, dob:birthData, contactNumber, address
        });


        console.log("User Created Successfully", result);
        res.status(201).json(ApiResponse.success(201, result, "User Created Successfully"));
    } catch (error) {
        console.log("Error while creating user", error);
        res.status(500).json(ApiResponse.error(500, error, "Error while creating user"));
    }
}

export const updateUser = async (req: Request, res: Response) => {}

export const deleteUser = async (req: Request, res: Response) => {}

export const getUser = async (req: Request, res: Response) => {}

export const getUsers = async (req: Request, res: Response) => {}