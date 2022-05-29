import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.headers;
            const id = String(user_id);

            const list = this.listAllUsersUseCase.execute({ user_id: id });
            return response.json(list);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { ListAllUsersController };
