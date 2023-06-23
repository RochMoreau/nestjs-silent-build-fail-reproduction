import {IAction} from "../interfaces/action.interface";

export class FooAction implements IAction{
    readonly type;

    constructor() {
        this.type = 'foo';
    }

    execute(param: string): void {
        console.log(`Foo: ${param}`);
    }

}
