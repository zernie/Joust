import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class IncrementTimeMutator implements GameStateMutator {
    time: number;
    constructor(time?: number);
    applyTo(state: GameState): GameState;
}
