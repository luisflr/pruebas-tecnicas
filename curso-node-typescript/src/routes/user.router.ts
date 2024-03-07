import { UserController } from "../controllers/user.controller";
import { BaseRoutes } from "./router";

export class UserRouter extends BaseRoutes<UserController> {

  constructor() {
    super(UserController)
  }

  routes(): void {
    this.router.get('/user', (req, res) => this.controller.getUser(req, res))
  }
}