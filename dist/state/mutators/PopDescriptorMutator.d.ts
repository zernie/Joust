import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class PopDescriptorMutator implements GameStateMutator {
    applyTo(state: GameState): GameState;
}
