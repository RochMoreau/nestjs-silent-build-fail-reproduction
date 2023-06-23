import {Inject, Injectable} from '@nestjs/common';
import {IAction} from "./interfaces/action.interface";

@Injectable()
export class ActionRunnerService {
    constructor(@Inject('Actions') private readonly actions: Array<IAction>) {
    }

    executeAction(type: string, params: any) {
        const action = this.actions.find((action) => action.type === type);
        if (!action) {
            throw new Error(`Action not found.`);
        }
        return action.execute(params);
    }
}
