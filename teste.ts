import { Request, Response } from "express";


class BlogController {
  async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page as string;

    

    const results = await findBlogs.execute({
      page: Number(page || 1),
        });

    return response.json(results);
  }
}

export { BlogController };
