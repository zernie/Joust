import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class SetTimeMutator implements GameStateMutator {
    time: number;
    constructor(time: number);
    applyTo(state: GameState): GameState;
}
