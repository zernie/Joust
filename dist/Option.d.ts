export default class Option {
    protected _index: number;
    protected _type: number;
    protected _entityId: number;
    protected _targets: number[];
    constructor(_index: number, _type: number, _entityId: number, _targets: number[]);
    readonly index: number;
    readonly type: number;
    readonly entityId: number;
    hasTargets(): boolean;
    isTarget(target: number): boolean;
    readonly targets: number[];
}
