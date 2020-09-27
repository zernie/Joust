import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import GameStateTrackerPlugin from "../GameStateTrackerPlugin";
export default class Timer extends GameStateTrackerPlugin {
    private lastDescriptorType;
    private waitAtNextBlockOrEndOfBlock;
    private mulliganChoicesSeen;
    private lastDescriptorEntityId;
    private upcomingMetadataTargets;
    private hasSteppedThisBlock;
    onBeforeMutate(mutator: GameStateMutator, state: GameState): void | GameState;
    onAfterMutate(mutator: GameStateMutator, state: GameState): void | GameState;
}
