import {IAction} from "../interfaces/action.interface";

export class BarAction implements IAction {
    readonly type;

    constructor() {
        this.type = 'bar';
    }

    execute(param: string): void {
        console.log(`Bar: ${param}`);
    }

}
