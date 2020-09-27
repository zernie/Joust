import Entity from "./Entity";
import * as Immutable from "immutable";
import { GameType } from "./enums";
export default class Game extends Entity {
    protected _type: GameType | null;
    constructor(id: number, tags: Immutable.Map<string, number>, _type: GameType | null);
    readonly type: GameType | null;
    protected factory(tags: Immutable.Map<string, number>, cardId: string): Entity;
}
