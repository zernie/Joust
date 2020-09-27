import Entity from "./Entity";
import * as Immutable from "immutable";
export default class Player extends Entity {
    protected _name: string;
    protected _playerId: number;
    protected _rank: number;
    protected _legendRank: number;
    protected _conceded: boolean;
    constructor(id: number, tags: Immutable.Map<string, number>, playerId: number, name: string, rank?: number, legendRank?: number, conceded?: boolean);
    readonly playerId: number;
    readonly name: string;
    readonly rank: number;
    readonly legendRank: number;
    readonly conceded: boolean;
    toString(): string;
    protected factory(tags: Immutable.Map<string, number>, cardId: string): Player;
}
