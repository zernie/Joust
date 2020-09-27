import * as Immutable from "immutable";
import { MetaDataType } from "./enums";
export default class MetaData {
    private _type;
    private _data;
    private _entities;
    constructor(_type: MetaDataType, _data: number, _entities?: Immutable.Set<number>);
    readonly type: MetaDataType;
    readonly data: number;
    readonly entities: Immutable.Set<number>;
}
