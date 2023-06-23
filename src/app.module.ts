import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ActionRunnerModule } from "./action-runner/action-runner.module";

@Module({
  imports: [ActionRunnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
