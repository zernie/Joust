import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class HideEntityMutator implements GameStateMutator {
    id: number;
    zone: number;
    constructor(id: number, zone: number);
    applyTo(state: GameState): GameState;
}
