import { Router } from "express";

// Aqui se aplica el patron Factory Method
export class BaseRoutes<T> {
  public router: Router;
  public controller: T;

  //public middleware: U

  constructor(TController: { new(): T}) {
    this.router = Router()
    this.controller = new TController()
    this.routes()
  }

  routes() {}
}