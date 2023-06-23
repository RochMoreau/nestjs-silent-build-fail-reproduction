import { Injectable } from "@nestjs/common";
import { ActionRunnerService } from "./action-runner/action-runner.service";

@Injectable()
export class AppService {
  constructor(private readonly actionRunnerService: ActionRunnerService) {}

  getHello(): string {
    this.actionRunnerService.executeAction("foo", "Hello World!");
    return "Hello World!";
  }
}
