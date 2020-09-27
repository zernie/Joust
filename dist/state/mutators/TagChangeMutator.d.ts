import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class TagChangeMutator implements GameStateMutator {
    id: number;
    tag: number;
    value: number;
    constructor(id: number, tag: number, value: number);
    applyTo(state: GameState): GameState;
}
