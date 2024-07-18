'use server'

import { CreateUserParams } from "@/types"
import { handleError } from "../utils"
import { copnnectToDatabase } from "../mongobd/database"
import User from "../mongobd/database/models/user.model"

export const createUser = async (user: CreateUserParams) => {
    try {
        await copnnectToDatabase();
        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        handleError(error);
    }
}