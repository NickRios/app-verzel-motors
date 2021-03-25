import { Request, Response } from "express";
import { container } from 'tsyringe';

import SendForgotPasswordService from '../services/SendForgotPassword';

export default class ForgotPasswordController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body;
    
            const sendForgotPassword = container.resolve(SendForgotPasswordService);
    
            await sendForgotPassword.execute({
                email,
            });
    
            
            return res.status(204).json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}