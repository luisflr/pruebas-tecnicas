import * as dotenv from "dotenv";

export abstract class ConfigServer {
  constructor(){
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)
    dotenv.config({
      path: nodeNameEnv
    })
  }

  public getEnvironment(key: string): string | undefined {
    return process.env[key]
  }

  public getNumberEnv(key: string): number {
    return Number(this.getEnvironment(key))
  }

  public get nodeEnv (): string {
    return this.getEnvironment('NODE_ENV')?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const envList: string[] = ['env']
    if (path.length > 0) {
      envList.push(path)
    }
    return `.${envList.join('.')}`
  }
}