import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class ClearOptionsMutator implements GameStateMutator {
    applyTo(state: GameState): GameState;
}
