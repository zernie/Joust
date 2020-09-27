export default class Choice {
    protected _index: number;
    protected _entityId: number;
    constructor(_index: number, _entityId: number);
    readonly index: number;
    readonly entityId: number;
}
