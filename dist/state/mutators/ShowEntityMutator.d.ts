import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import * as Immutable from "immutable";
export default class ShowEntityMutator implements GameStateMutator {
    entityId: number;
    cardId: string;
    tags: Immutable.Map<string, number>;
    replaceTags: boolean;
    constructor(entityId: number, cardId: string, tags: Immutable.Map<string, number>, replaceTags?: boolean);
    applyTo(state: GameState): GameState;
}
