export interface IAction {
    readonly type: string;

    execute(param: string): void;
}
