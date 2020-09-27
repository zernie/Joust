import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class ResetGameMutator implements GameStateMutator {
    applyTo(state: GameState): GameState;
}
