import { Request, Response } from "express";
import { container } from 'tsyringe';

import ResetPasswordService from '../services/ResetPasswordService'

export default class ResetPasswordController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { password, token } = req.body;
    
            const resetPassword = container.resolve(ResetPasswordService);
    
            await resetPassword.execute({
                password,
                token,
            });
    
            
            return res.status(204).json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}