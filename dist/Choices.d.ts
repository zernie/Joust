import Choice from "./Choice";
import * as Immutable from "immutable";
export default class Choices {
    protected _choices: Immutable.Map<number, Choice>;
    protected _type: number;
    constructor(_choices: Immutable.Map<number, Choice>, _type: number);
    readonly choices: Immutable.Map<number, Choice>;
    readonly type: number;
}
