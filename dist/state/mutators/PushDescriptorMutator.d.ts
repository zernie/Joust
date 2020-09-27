import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import GameStateDescriptor from "../GameStateDescriptor";
export default class PushDescriptorMutator implements GameStateMutator {
    descriptor: GameStateDescriptor;
    constructor(descriptor: GameStateDescriptor);
    applyTo(state: GameState): GameState;
}
