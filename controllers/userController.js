import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userModel from "../models/user.js";

const secret = '_test$56kevin_'

export const signUp = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    try {
        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashPassword = await bcrypt.hash(password, 12)
        const user = await userModel.create({
            email,
            password: hashPassword,
            name: `${firstName} ${lastName}`
        });

        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1h' })
        return res.status(201).json({
            user, token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email })
        if (!user) return res.status(400).json({ message: "user with record not found" })

        const checkPassword = await bcrypt.compare(password, user.password)
       
        if (!checkPassword) return res.status(400).json({ message: "invalid details" })

        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1h' })

        return res.status(200).json({
            user, token
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}