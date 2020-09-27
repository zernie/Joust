import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import Entity from "../../Entity";
export default class AddEntityMutator implements GameStateMutator {
    entity: Entity;
    constructor(entity: Entity);
    applyTo(state: GameState): GameState;
}
