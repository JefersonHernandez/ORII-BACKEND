import { Request, Response } from "express";
import "../../calendar";
import { AppDataSource } from "../data-source";
import { UserRoles } from "../entity/UserRoles";
export class UserRolesController {
  static readonly getUserRoles = async (req: Request, res: Response) => {
    const programaRepository = AppDataSource.getRepository(UserRoles);
    // authorize()
    //   .then(listEvents)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch(console.error);
    try {
      const data = await programaRepository.find();

      res.send(data);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };
}
