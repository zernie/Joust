import * as Immutable from "immutable";
import { BlockType, GameTag } from "../enums";
import MetaData from "../MetaData";
export default class GameStateDescriptor {
    private _entityId;
    private _target;
    private _blockType;
    private _triggerKeyword;
    private _metaData;
    constructor(_entityId: number, _target: number, _blockType: BlockType, _triggerKeyword: GameTag | null, _metaData?: Immutable.Set<MetaData>);
    readonly entityId: number;
    readonly target: number;
    readonly type: BlockType;
    readonly triggerKeyword: GameTag | null;
    readonly metaData: Immutable.Set<MetaData>;
}
