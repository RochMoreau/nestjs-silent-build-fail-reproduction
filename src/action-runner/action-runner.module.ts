import { Module } from "@nestjs/common";
import { ActionRunnerService } from "./action-runner.service";
import { BarAction } from "./actions/bar.action";
import { FooAction } from "./actions/foo.action";

@Module({
  providers: [
    ActionRunnerService,
    FooAction,
    BarAction,
    {
      provide: "Actions",
      useFactory: (...implementations) => implementations,
      inject: [FooAction, BarAction, ActionRunnerService], // Here, ActionRunnerService should not be injected
    },
  ],
  exports: [ActionRunnerService],
})
export class ActionRunnerModule {}
