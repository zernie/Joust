import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class ClearChoicesMutator implements GameStateMutator {
    player: number;
    constructor(player: number);
    applyTo(state: GameState): GameState;
}
